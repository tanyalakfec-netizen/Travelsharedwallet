# 🏝️ TripSplit — Mobile PWA

แอปหารค่าทริปกับเพื่อน · ติดตั้งลงโฮมสกรีน iPhone/Android ได้เหมือนแอปจริง · Deploy ฟรีถาวร

**Stack:** React 18 + Vite + Tailwind + vite-plugin-pwa · 100% client-side · ไม่ต้องมี server

---

## ✨ สิ่งที่อยู่ในกล่อง

- **Central Fund** พร้อม wave progress + แจ้งเตือนเมื่อต่ำกว่าเกณฑ์
- **Multi-Payer** หาร 3 โหมด (งบกลาง / 1 คน / หลายคนช่วยกันออก)
- **Debt Simplification** อัลกอริทึม greedy ลดจำนวนธุรกรรมโอนคืน
- **PromptPay QR** ตาม EMVCo spec + CRC16-CCITT (สแกนแล้วยอดขึ้นอัตโนมัติ)
- **PWA-ready** ติดตั้ง home screen ได้, ทำงาน offline ได้, มี service worker
- **Responsive** mobile-first, design system สีตามสเปค (Navy/Coral/Sand)

---

## 🚀 Quick Start (ลองรันเครื่องตัวเอง)

ต้องมี Node.js 18+ ติดตั้งก่อน → https://nodejs.org

```bash
npm install
npm run dev
```

เปิด http://localhost:5173 บนเบราว์เซอร์ ลองเล่นได้เลย ข้อมูลเริ่มต้นเป็นทริปสมุย 4 คน

```bash
npm run build      # สร้างไฟล์ production ใน dist/
npm run preview    # ทดสอบ dist/ ก่อน deploy
```

---

## 🌐 Deploy ฟรี (เลือก 1 วิธี)

### 🟢 วิธีที่ 1: Vercel (แนะนำ — ง่ายที่สุด)

ใช้เวลา ~3 นาที ได้ HTTPS + custom domain ฟรี

1. **สร้าง GitHub repo** เอาโค้ดทั้งโฟลเดอร์ขึ้น GitHub
   ```bash
   git init
   git add .
   git commit -m "init tripsplit"
   git branch -M main
   git remote add origin https://github.com/<ชื่อคุณ>/tripsplit.git
   git push -u origin main
   ```

2. **ไป https://vercel.com** → Sign in with GitHub
3. กด **"Add New Project"** → เลือก repo `tripsplit`
4. Vercel จะ detect Vite อัตโนมัติ ไม่ต้องตั้งค่าอะไร → กด **Deploy**
5. ~30 วินาทีต่อมา ได้ link ประมาณ `https://tripsplit-xxx.vercel.app` ใช้ได้เลย

ทุกครั้งที่ `git push` Vercel จะ deploy ใหม่อัตโนมัติ ✨

### 🟡 วิธีที่ 2: Netlify

1. https://netlify.com → Sign in with GitHub
2. **"Add new site"** → **"Import an existing project"** → เลือก repo
3. Build command: `npm run build` · Publish directory: `dist`
4. กด **Deploy** เสร็จ

### 🟠 วิธีที่ 3: Cloudflare Pages

1. https://pages.cloudflare.com → Sign in
2. **"Create a project"** → Connect to Git → เลือก repo
3. Framework preset: **Vite** · Build command: `npm run build` · Output: `dist`
4. **Save and Deploy**

### 🔵 วิธีที่ 4: GitHub Pages (ถ้าไม่อยาก sign up อะไรเพิ่ม)

1. แก้ `vite.config.js` เพิ่ม `base: "/tripsplit/"` ใต้ `defineConfig({...`
2. รัน `npm run build` แล้ว push โฟลเดอร์ `dist/` ขึ้น branch `gh-pages`
   ```bash
   npm i -D gh-pages
   npx gh-pages -d dist
   ```
3. ใน repo settings → Pages → source = `gh-pages` branch → Save
4. เข้าที่ `https://<user>.github.io/tripsplit/`

---

## 📱 ติดตั้งเป็นแอปบนมือถือ

### iPhone / iPad (Safari)
1. เปิดเว็บใน **Safari** (Chrome ไม่ได้)
2. กดปุ่ม **Share** (รูปสี่เหลี่ยมมีลูกศรขึ้น)
3. เลื่อนลง → **"Add to Home Screen"** → กด **Add**
4. ไอคอน TripSplit จะอยู่บนหน้าจอ — กดเปิดได้เหมือนแอปจริง full-screen ไม่มี address bar

### Android (Chrome / Edge)
1. เปิดเว็บใน Chrome → จะมีแบนเนอร์ **"Install"** ขึ้นมาเอง
2. หรือกด **⋮** เมนูขวาบน → **"Install app"** / **"Add to Home screen"**
3. แอปจะอยู่ใน app drawer + home screen

> **Tip:** หลังติดตั้งแอปทำงาน offline ได้ แต่ QR Code ต้องมีเน็ตครั้งแรกเพื่อโหลด (cache ไว้แล้วครั้งต่อไปดูได้)

---

## 🎨 ปรับแต่ง

### เปลี่ยนสี
แก้ที่ `tailwind.config.js` ตรง `colors:`
```js
navy:  { DEFAULT: "#003366", deep: "#001F40", light: "#1A4D80" },
coral: { DEFAULT: "#FF7F50", deep: "#FF6B3D", soft: "#FFE5D9" },
sand:  { DEFAULT: "#FFF8EE", deep: "#F5EDD8", warm: "#FAF6E9" },
```

### เปลี่ยนชื่อ/ไอคอนแอป
- ชื่อแอป: `vite.config.js` → `manifest.name` / `manifest.short_name`
- Theme color (ขอบบนตอนเปิดแอป): `index.html` → `<meta name="theme-color">` + `vite.config.js`
- ไอคอน: replace ไฟล์ใน `public/icon-*.png` (ขนาด 192/512/512-maskable, PNG)
  - หรือสร้างใหม่ด้วย `gen_icons.py` (ต้อง `pip install pillow`)

### แก้ข้อมูลตัวอย่าง
ใน `src/App.jsx` หาฟังก์ชัน `seedTrip()` แก้ members/expenses ได้ตามใจ

### ทำให้ข้อมูลเก็บถาวร (persistent)
ตอนนี้ refresh แล้วข้อมูลหายเพราะอยู่ใน React state อย่างเดียว เพิ่ม localStorage ง่ายๆ:

```jsx
// ที่ฟังก์ชัน App() ด้านบน
const [trip, setTrip] = useState(() => {
  const saved = localStorage.getItem("tripsplit");
  return saved ? JSON.parse(saved) : seedTrip();
});

useEffect(() => {
  localStorage.setItem("tripsplit", JSON.stringify(trip));
}, [trip]);
```

---

## 🔌 เชื่อมกับ Google Sheets (ขั้นถัดไป)

ถ้าต้องการให้เพื่อนทุกคนเห็นข้อมูลเดียวกัน (sync ข้ามเครื่อง):

1. สร้าง Google Sheet 3 ชีท: **Members**, **Expenses**, **Topups**
2. เปิด Apps Script (Extensions → Apps Script) เขียน `doGet` / `doPost` รับส่ง JSON
3. Deploy as Web App → ได้ URL ขึ้นต้น `https://script.google.com/macros/s/.../exec`
4. ใน `App.jsx` แทน `setTrip` ด้วย `fetch(SHEETS_URL, { method: "POST", body: ... })` ตอนเพิ่มข้อมูล
5. ตอน mount โหลดข้อมูลจาก `fetch(SHEETS_URL)` แล้วค่อย `setTrip`

> โครง logic การคำนวณ (`computeFund`, `computeBalances`, `simplify`, `buildPP`) เก็บไว้ใน frontend ได้เลย ไม่ต้องย้ายไป Apps Script

---

## 📁 โครงสร้างไฟล์

```
tripsplit/
├── public/
│   ├── icon-192.png            ← PWA icon
│   ├── icon-512.png
│   ├── icon-512-maskable.png   ← สำหรับ Android adaptive icons
│   ├── apple-touch-icon.png    ← iOS home screen
│   ├── icon.svg
│   └── favicon.svg
├── src/
│   ├── App.jsx                 ← UI ทั้งหมด + logic
│   ├── main.jsx                ← React entry
│   └── index.css               ← Tailwind imports
├── index.html                  ← PWA meta tags + Google Fonts
├── vite.config.js              ← PWA plugin config
├── tailwind.config.js          ← Design tokens
├── postcss.config.js
└── package.json
```

---

## 🆓 Cost = 0 บาท

| Service | Free tier ที่ใช้ |
|---|---|
| Vercel/Netlify/Cloudflare Pages | 100GB bandwidth/เดือน + custom domain ฟรี |
| GitHub | Repo public ไม่จำกัด |
| api.qrserver.com | สร้าง QR ฟรีไม่จำกัด (และ cache ไว้แล้วใน service worker) |
| Google Fonts | ฟรีไม่จำกัด |

ถ้าโตจริงๆ จนเกิน free tier (= มีคนใช้หลักหมื่นต่อเดือน) ค่อยอัพเกรด

---

Built with ❤️ for splitting trip costs without the awkward "ใครค้างใครเท่าไหร่" conversations.
