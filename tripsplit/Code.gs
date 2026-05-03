/**
 * TripSplit · Google Apps Script Backend
 * ────────────────────────────────────────
 * วิธีติดตั้ง:
 * 1. สร้าง Google Sheet เปล่าใหม่ (ตั้งชื่ออะไรก็ได้)
 * 2. Extensions → Apps Script (เปิดในแท็บใหม่)
 * 3. ลบโค้ดเดิมทั้งหมด แล้ววางโค้ดนี้แทน → กด Save (Ctrl+S)
 * 4. บนแถบบน เปลี่ยน dropdown "select function" เป็น "setup" → กด ▶ Run
 *    (อนุญาต permissions ที่เด้งขึ้น 2-3 ครั้ง)
 * 5. กด Deploy ▾ → New deployment
 *      • Type: Web app
 *      • Description: tripsplit-v1
 *      • Execute as: Me
 *      • Who has access: Anyone
 *    กด Deploy → Copy "Web app URL" (ขึ้นต้น https://script.google.com/macros/s/...)
 * 6. เอา URL ที่ copy ไปใส่ในแอป TripSplit ที่เมนู ⚙ ตั้งค่า
 *
 * อัปเดตโค้ดทีหลัง: หลังแก้โค้ด ต้อง Deploy → Manage deployments
 *                    → ปุ่มดินสอแก้ → Version: New version → Deploy
 *                    (URL เดิมจะใช้เวอร์ชันใหม่อัตโนมัติ)
 */

const HEADERS = {
  Settings: ['key', 'value'],
  Members:  ['id', 'name', 'phone', 'color'],
  Topups:   ['id', 'memberId', 'amount', 'ts', 'note'],
  Expenses: ['id', 'title', 'category', 'amount', 'ts', 'payers', 'splitAmong'],
};

const DEFAULTS = {
  name: 'ทริปใหม่',
  emoji: '🏝️',
  threshold: 2000,
};

/* ════════════════════ One-time Setup ════════════════════ */

/**
 * รันครั้งเดียวตอนเริ่ม — สร้างชีท + headers + format
 * Apps Script editor: dropdown ▾ "setup" → ▶ Run
 */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  Object.entries(HEADERS).forEach(([name, headers]) => {
    let sh = ss.getSheetByName(name) || ss.insertSheet(name);
    sh.clear();
    sh.getRange(1, 1, 1, headers.length)
      .setValues([headers])
      .setFontWeight('bold')
      .setBackground('#003366')
      .setFontColor('#ffffff');
    sh.setFrozenRows(1);
    sh.autoResizeColumns(1, headers.length);
  });

  // Phone column = text (รักษาเลขศูนย์นำหน้า "0812...")
  ss.getSheetByName('Members').getRange('C:C').setNumberFormat('@');

  // ค่าเริ่มต้น
  const settings = ss.getSheetByName('Settings');
  if (settings.getLastRow() < 2) {
    settings.appendRow(['name', DEFAULTS.name]);
    settings.appendRow(['emoji', DEFAULTS.emoji]);
    settings.appendRow(['threshold', DEFAULTS.threshold]);
  }

  // ลบ Sheet1 ที่ค้างอยู่ ถ้าว่างเปล่า
  ss.getSheets().forEach(s => {
    if (!HEADERS[s.getName()] && s.getLastRow() === 0) {
      try { ss.deleteSheet(s); } catch (_) {}
    }
  });

  ss.toast('Setup เรียบร้อย ✓ ไป Deploy → New deployment ต่อได้เลย', 'TripSplit', 8);
}

/* ════════════════════ Web App Endpoints ════════════════════ */

function doGet(e) {
  return _wrap(() => ({ trip: readTrip() }));
}

function doPost(e) {
  return _wrap(() => {
    const body = JSON.parse(e.postData.contents);
    const result = handleAction(body.action, body);
    return { result, trip: readTrip() };
  });
}

function _wrap(fn) {
  const lock = LockService.getScriptLock();
  let got = false;
  try {
    got = lock.tryLock(15000);
    if (!got) throw new Error('คนอื่นกำลังเขียนอยู่ ลองอีกครั้ง');
    return _json({ ok: true, ...fn() });
  } catch (err) {
    return _json({ ok: false, error: String(err && err.message || err) });
  } finally {
    if (got) try { lock.releaseLock(); } catch (_) {}
  }
}

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ════════════════════ Actions ════════════════════ */

function handleAction(action, body) {
  switch (action) {
    case 'addExpense':    return addExpense(body.expense);
    case 'deleteExpense': return deleteExpense(body.id);
    case 'addTopup':      return addTopup(body.topup);
    case 'addMember':     return addMember(body.member);
    case 'updateTrip':    return updateTrip(body.settings || {});
    case 'reset':         return resetData();
    case 'ping':          return { pong: Date.now() };
    default: throw new Error('Unknown action: ' + action);
  }
}

function addExpense(e) {
  if (!e || !e.id || !e.title || typeof e.amount !== 'number')
    throw new Error('expense ไม่ครบ (id/title/amount)');
  _sheet('Expenses').appendRow([
    e.id,
    e.title,
    e.category || 'other',
    e.amount,
    Number(e.ts) || Date.now(),
    JSON.stringify(e.payers || []),
    (e.splitAmong || []).join(','),
  ]);
  return { id: e.id };
}

function deleteExpense(id) {
  const sh = _sheet('Expenses');
  const data = sh.getDataRange().getValues();
  for (let i = data.length - 1; i >= 1; i--) {
    if (String(data[i][0]) === String(id)) {
      sh.deleteRow(i + 1);
      return { id };
    }
  }
  throw new Error('ไม่พบรายการ id: ' + id);
}

function addTopup(t) {
  if (!t || !t.id || !t.memberId || typeof t.amount !== 'number')
    throw new Error('topup ไม่ครบ (id/memberId/amount)');
  _sheet('Topups').appendRow([
    t.id,
    t.memberId,
    t.amount,
    Number(t.ts) || Date.now(),
    t.note || '',
  ]);
  return { id: t.id };
}

function addMember(m) {
  if (!m || !m.id || !m.name) throw new Error('member ไม่ครบ');
  _sheet('Members').appendRow([
    m.id,
    m.name,
    String(m.phone || ''),
    m.color || '#003366',
  ]);
  return { id: m.id };
}

function updateTrip(s) {
  const sh = _sheet('Settings');
  const data = sh.getDataRange().getValues();
  const updated = {};
  Object.entries(s).forEach(([k, v]) => {
    let found = false;
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][0]) === k) {
        sh.getRange(i + 1, 2).setValue(v);
        found = true;
        break;
      }
    }
    if (!found) sh.appendRow([k, v]);
    updated[k] = v;
  });
  return updated;
}

function resetData() {
  ['Members', 'Topups', 'Expenses'].forEach(name => {
    const sh = _sheet(name);
    if (sh.getLastRow() > 1) {
      sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clear();
    }
  });
  return { reset: true };
}

/* ════════════════════ Read ════════════════════ */

function readTrip() {
  const sRows = _readSheet('Settings');
  const settings = {};
  sRows.forEach(r => { settings[r.key] = r.value; });

  const members = _readSheet('Members').map(m => ({
    id: String(m.id),
    name: String(m.name),
    phone: String(m.phone || '').replace(/\D/g, ''),
    color: String(m.color || '#003366'),
  }));

  const topups = _readSheet('Topups').map(t => ({
    id: String(t.id),
    memberId: String(t.memberId),
    amount: Number(t.amount) || 0,
    ts: Number(t.ts) || Date.now(),
    note: String(t.note || ''),
  }));

  const expenses = _readSheet('Expenses').map(e => ({
    id: String(e.id),
    title: String(e.title),
    category: String(e.category || 'other'),
    amount: Number(e.amount) || 0,
    ts: Number(e.ts) || Date.now(),
    payers: _safeJSON(e.payers, []),
    splitAmong: String(e.splitAmong || '').split(',').filter(Boolean),
  }));

  return {
    name: String(settings.name || DEFAULTS.name),
    emoji: String(settings.emoji || DEFAULTS.emoji),
    threshold: Number(settings.threshold) || DEFAULTS.threshold,
    members,
    topups,
    expenses,
  };
}

/* ════════════════════ Helpers ════════════════════ */

function _sheet(name) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sh) throw new Error('Sheet not found: ' + name + ' — ลองรัน setup() ก่อน');
  return sh;
}

function _readSheet(name) {
  const sh = _sheet(name);
  const data = sh.getDataRange().getValues();
  if (data.length < 2) return [];
  const headers = data[0];
  return data.slice(1)
    .filter(row => row[0] !== '' && row[0] != null)
    .map(row => {
      const o = {};
      headers.forEach((h, i) => { o[h] = row[i]; });
      return o;
    });
}

function _safeJSON(v, fb) {
  if (Array.isArray(v) || (v && typeof v === 'object')) return v;
  if (v === '' || v == null) return fb;
  try { return JSON.parse(String(v)); } catch (_) { return fb; }
}
