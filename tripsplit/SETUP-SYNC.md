# 🔄 SETUP-SYNC.md — เปิด Cloud Sync ให้ทุกคนเห็นข้อมูลเดียวกัน

ใช้ **Google Sheets + Apps Script** เป็น backend (ฟรีไม่จำกัด ใช้ตลอดชีวิต)

ใช้เวลาทั้งหมด ~5 นาที

---

## ภาพรวมว่ามันทำงานยังไง

```
┌─────────────┐    HTTPS     ┌──────────────────┐
│  มือถือเพื่อน A │ ←─────────→ │                  │
├─────────────┤              │  Apps Script     │   ┌─────────────┐
│  มือถือเพื่อน B │ ←─────────→ │  (Web App URL)   │ → │ Google Sheet │
├─────────────┤              │                  │   │ (data store)│
│  มือถือเพื่อน C │ ←─────────→ │                  │   └─────────────┘
└─────────────┘              └──────────────────┘
```

- ทุกครั้งที่มีคน **เพิ่มรายจ่าย / เติมเงิน** → ส่งไปที่ Apps Script → เขียนลง Sheet
- ทุกครั้งที่ **เปิดแอป / กลับมา foreground** → ดึงข้อมูลล่าสุดจาก Sheet มาแสดง
- ถ้า **ไม่มีเน็ต** → ยังเพิ่มข้อมูลในเครื่องตัวเองได้ (เก็บใน localStorage) แต่จะไม่ sync จนกว่าจะกลับมาออนไลน์

---

## ⚙ ขั้นที่ 1 — สร้าง Google Sheet + Apps Script

### 1.1 สร้าง Sheet
1. เข้า https://sheets.new (เปิด Google Sheet เปล่าใหม่)
2. ตั้งชื่ออะไรก็ได้ เช่น `TripSplit Data`

### 1.2 เปิด Apps Script editor
1. ในแถบเมนูด้านบน → **Extensions** → **Apps Script**
2. จะเปิดแท็บใหม่ขึ้นมา มีไฟล์ชื่อ `Code.gs` อยู่แล้ว มีโค้ด `function myFunction()` เปล่าๆ

### 1.3 วางโค้ด
1. **เลือกโค้ดเดิมทั้งหมด ลบทิ้ง** (Ctrl+A → Delete)
2. **เปิดไฟล์ `Code.gs`** ที่ผมแนบให้ → copy ทั้งไฟล์ → วางลงไป
3. กด **Ctrl+S** (หรือ ⌘+S บน Mac) เพื่อ Save
4. ตั้งชื่อโปรเจกต์ว่า `TripSplit` (จะถามตอน save ครั้งแรก)

### 1.4 รัน setup ครั้งเดียว
1. แถบบนสุดมี dropdown **"Select function to run"** → เลือก **`setup`**
2. กดปุ่ม **▶ Run** ข้างๆ
3. ครั้งแรกจะมี popup ขอสิทธิ์ — กด **Review permissions** → เลือกบัญชี Google ของคุณ
4. หน้าจอ "Google hasn't verified this app" → กด **Advanced** → **Go to TripSplit (unsafe)**
   > 💡 ปลอดภัย เพราะคุณเขียนโค้ดเองและรันในบัญชีตัวเอง — Google เตือนเพราะ project ใหม่ที่ไม่ผ่านการ review เท่านั้น
5. กด **Allow** อนุญาตเข้าถึง Sheets
6. รอ ~2 วินาที ใน execution log จะขึ้น `Execution completed`

ลองกลับไปดูที่ Sheet — จะเห็น 4 แท็บล่างสุด: `Settings` `Members` `Topups` `Expenses` พร้อม headers สีน้ำเงิน

---

## 🚀 ขั้นที่ 2 — Deploy เป็น Web App

1. ในหน้า Apps Script editor → กดปุ่ม **Deploy** (มุมขวาบน) → **New deployment**
2. ที่ icon ⚙ ข้าง "Select type" → เลือก **Web app**
3. กรอก:
   - **Description**: `tripsplit v1` (อะไรก็ได้)
   - **Execute as**: **Me (your-email@gmail.com)**
   - **Who has access**: **Anyone** ⚠ สำคัญ! ต้องเลือก Anyone ไม่ใช่ "Anyone with Google account"
4. กด **Deploy**
5. หน้าต่างจะแสดง **Web app URL** — กด **Copy** เก็บไว้
   - URL จะหน้าตาประมาณ:
     ```
     https://script.google.com/macros/s/AKfycby...../exec
     ```

> ⚠ **เกี่ยวกับ "Anyone"**: หมายถึง endpoint นี้ใครก็เรียกได้ถ้ามี URL — แต่ URL ยาวมาก guess ไม่ออก และไม่มีลิงก์ไปจากที่ไหน ถือว่าค่อนข้างปลอดภัยสำหรับใช้ในกลุ่มเพื่อน อย่าแชร์ URL ในที่สาธารณะก็พอ

---

## 📲 ขั้นที่ 3 — เชื่อมต่อในแอป

1. เปิดแอป TripSplit (ที่ deploy บน Vercel แล้ว หรือรัน localhost ก็ได้)
2. กดปุ่ม **⚙ Settings** ที่มุมขวาบน
3. วาง **Web app URL** ที่ copy มาในช่อง
4. กด **"ทดสอบเชื่อมต่อ"** → ถ้าขึ้น **✓ เชื่อมต่อสำเร็จ** ก็ใช้ได้
5. กด **"บันทึก URL"**

จากนี้ทุกครั้งที่เพิ่มรายจ่าย/เติมเงิน → ขึ้นบน Sheet ทันที 🎉

ที่ header แทนที่จะเป็น `ใช้งานเครื่องเดียว` จะกลายเป็น `sync เมื่อกี้` (สีเขียว)

---

## 👥 ขั้นที่ 4 — แชร์ให้เพื่อนใช้

ส่ง 2 อย่างให้เพื่อน:

1. **Link แอป** เช่น `https://tripsplit-xxx.vercel.app`
2. **Web app URL** ตัวเดียวกับที่คุณใส่

เพื่อนต้องทำแค่:
1. เปิด link แอป
2. กด ⚙ → วาง Web app URL → ทดสอบ → บันทึก
3. เสร็จ — เห็นข้อมูลเดียวกับคุณ

> 💡 **Tip:** ส่ง URL ผ่าน Line/Messenger ส่วนตัว ไม่ต้องแชร์ในกลุ่มสาธารณะ

---

## 🔧 อยากดูข้อมูลใน Sheet โดยตรง?

แค่เปิด Google Sheet ที่สร้างไว้ — เห็นข้อมูลทั้งหมดเป็น raw rows สามารถ:
- แก้ผ่าน Sheet ตรงๆ ได้ (เปลี่ยนชื่อ, แก้ยอด)
- Filter / Sort / สร้าง Pivot table ได้ปกติ
- Export เป็น Excel / PDF ได้
- ใช้ Google Sheets formula วิเคราะห์เพิ่ม

ระวังนิดเดียว: **อย่าลบ row header แถวบนสุด** ของแต่ละ sheet

---

## 🔄 อัปเดตโค้ด Apps Script ทีหลัง

หากแก้ไข `Code.gs` แล้วต้องการให้ deployment เดิมใช้โค้ดใหม่:

1. Apps Script editor → **Deploy** → **Manage deployments**
2. เห็น deployment เดิม → กดไอคอนดินสอ ✏ ด้านขวา
3. ที่ **Version** → เลือก **New version**
4. กด **Deploy**

URL เดิมจะใช้โค้ดเวอร์ชันใหม่ทันที ไม่ต้องเปลี่ยนอะไรในแอป

---

## 🐛 ปัญหาที่อาจเจอ

| ปัญหา | สาเหตุ / วิธีแก้ |
|---|---|
| `เชื่อมต่อไม่ได้` | URL ไม่ถูก ต้องลงท้ายด้วย `/exec` ไม่ใช่ `/dev` |
| `Sheet not found: Settings` | ลืมรัน `setup` — กลับไปทำขั้น 1.4 |
| `Authorization required` | ตอน Deploy เลือก "Who has access" เป็น "Anyone with Google account" → ต้องเปลี่ยนเป็น **Anyone** เฉยๆ |
| ใส่เบอร์ `0812...` แต่ใน Sheet กลายเป็น `812...` | คอลัมน์ phone ใน Members ต้องเป็น text — `setup` ฟังก์ชันตั้งให้แล้ว แต่ถ้ายังเจออยู่ คลิกขวาที่หัวคอลัมน์ C → Format → Plain text |
| 2 คนเพิ่มข้อมูลพร้อมกัน | Apps Script มี LockService อยู่แล้ว — คนหลังจะรอ 15 วินาที ถ้าเกินค่อย retry |
| ข้อมูลใน Sheet หาย | restore จาก File → Version history (Google เก็บประวัติ 30 วันให้อัตโนมัติ) |

---

## 💸 ค่าใช้จ่าย / ขีดจำกัด

ทั้งหมด **ฟรี** ภายใต้ quota ปกติของ Google account ส่วนตัว:

- Apps Script: **20,000 calls/วัน** (ใช้ได้สบายๆ ถ้าไม่ใช่ thousand-user app)
- Google Sheet: เก็บได้ถึง **10 ล้านเซลล์** ต่อ sheet (เพียงพอสำหรับทริปทั้งหมดของชีวิต)
- ความเร็ว: ~1-2 วินาทีต่อ request (Apps Script cold start) — ไม่เร็วเท่า Firebase แต่ฟรีและเหมาะกับ usage แบบกลุ่มเพื่อน

ถ้ามี user เกิน 100 คนใช้พร้อมกันค่อยพิจารณาย้ายไป Firebase / Supabase
