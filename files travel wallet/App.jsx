import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import {
  Plus, Wallet, Users, Receipt, Home, X, ArrowDownCircle, AlertTriangle,
  ChevronRight, Trash2, UserPlus, QrCode, Check, TrendingUp, PiggyBank,
  ArrowRight, Cloud, CloudOff, Loader2, Settings, Bell,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════
   1. CATEGORY ICONS — hand-drawn SVG illustrations (cartoon style)
   ═══════════════════════════════════════════════════════════════ */

function IconTransport({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <ellipse cx="48" cy="40" rx="13" ry="5" fill="#FFFFFF" opacity="0.85" />
      <ellipse cx="14" cy="44" rx="10" ry="4" fill="#FFFFFF" opacity="0.85" />
      {/* plane body */}
      <path d="M10 32 L46 26 L52 30 L48 35 L18 36 Z" fill="#1B3A5C" />
      <path d="M22 26 L30 18 L34 19 L30 28 Z" fill="#1B3A5C" />
      <path d="M26 36 L24 42 L28 42 L31 36 Z" fill="#16304D" />
      {/* windows */}
      <circle cx="36" cy="30" r="1.4" fill="#E0B73B" />
      <circle cx="40" cy="30" r="1.4" fill="#E0B73B" />
      <circle cx="44" cy="30" r="1.4" fill="#E0B73B" />
      {/* nose tip */}
      <circle cx="51" cy="31" r="1.5" fill="#E8693C" />
    </svg>
  );
}

function IconFood({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* steam */}
      <path d="M22 14 Q24 10 22 6" stroke="#9BAE7E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M32 12 Q34 8 32 4" stroke="#9BAE7E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M42 14 Q44 10 42 6" stroke="#9BAE7E" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* bowl */}
      <path d="M10 28 L54 28 Q52 50 32 52 Q12 50 10 28 Z" fill="#1B3A5C" />
      <ellipse cx="32" cy="28" rx="22" ry="4" fill="#E8693C" />
      {/* noodles/contents */}
      <path d="M18 27 Q24 23 32 26 Q40 23 46 27" stroke="#E0B73B" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="26" cy="26" r="2" fill="#FAF1DD" />
      <circle cx="38" cy="27" r="1.5" fill="#FAF1DD" />
      {/* chopsticks */}
      <path d="M42 16 L52 32" stroke="#C99E2A" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 16 L56 30" stroke="#C99E2A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconStay({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* terracotta roof */}
      <path d="M8 24 L32 8 L56 24 L56 28 L8 28 Z" fill="#E8693C" />
      <path d="M14 24 L32 12 L50 24 Z" fill="#D55427" opacity="0.5" />
      {/* building */}
      <rect x="12" y="28" width="40" height="28" fill="#FAF1DD" />
      <rect x="12" y="54" width="40" height="3" fill="#1B3A5C" />
      {/* windows w/ shutters */}
      <rect x="17" y="34" width="7" height="9" fill="#1B3A5C" />
      <rect x="29" y="34" width="6" height="9" fill="#1B3A5C" />
      <rect x="40" y="34" width="7" height="9" fill="#1B3A5C" />
      <rect x="17" y="34" width="7" height="9" stroke="#9BAE7E" strokeWidth="1.2" fill="none" />
      <rect x="40" y="34" width="7" height="9" stroke="#9BAE7E" strokeWidth="1.2" fill="none" />
      {/* door */}
      <rect x="28" y="46" width="8" height="11" rx="0.5" fill="#1B3A5C" />
      <circle cx="34" cy="52" r="0.6" fill="#E0B73B" />
      {/* chimney */}
      <rect x="44" y="14" width="5" height="10" fill="#1B3A5C" />
    </svg>
  );
}

function IconActivity({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* ticket body */}
      <path d="M10 22 Q14 20 14 24 Q14 28 10 26 L10 42 Q14 40 14 44 Q14 48 10 46 L10 50 L54 50 L54 46 Q50 48 50 44 Q50 40 54 42 L54 26 Q50 28 50 24 Q50 20 54 22 L54 18 L10 18 Z"
        fill="#E8693C" />
      {/* divider */}
      <line x1="32" y1="22" x2="32" y2="46" stroke="#FAF1DD" strokeWidth="1.8" strokeDasharray="2 2" />
      {/* star */}
      <path d="M22 30 L23.5 33.2 L27 33.7 L24.5 36 L25 39.5 L22 37.8 L19 39.5 L19.5 36 L17 33.7 L20.5 33.2 Z" fill="#FAF1DD" />
      {/* number */}
      <text x="42" y="38" textAnchor="middle" fontFamily="'DM Serif Display', serif" fontSize="11" fill="#FAF1DD" fontWeight="bold">VIP</text>
    </svg>
  );
}

function IconShop({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* handles */}
      <path d="M22 22 Q22 12 32 12 Q42 12 42 22" stroke="#1B3A5C" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* bag */}
      <path d="M14 22 L50 22 L46 54 L18 54 Z" fill="#E8693C" />
      <path d="M14 22 L50 22 L48 28 L16 28 Z" fill="#D55427" />
      {/* heart on bag */}
      <path d="M32 36 Q28 32 26 35 Q26 39 32 43 Q38 39 38 35 Q36 32 32 36 Z" fill="#FAF1DD" />
    </svg>
  );
}

function IconOther({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* big sparkle */}
      <path d="M32 12 L34 28 L50 30 L34 32 L32 50 L30 32 L14 30 L30 28 Z" fill="#E0B73B" />
      {/* small sparkles */}
      <path d="M48 16 L49 21 L54 22 L49 23 L48 28 L47 23 L42 22 L47 21 Z" fill="#E8693C" />
      <path d="M14 42 L15 46 L19 47 L15 48 L14 52 L13 48 L9 47 L13 46 Z" fill="#9BAE7E" />
    </svg>
  );
}

const CATEGORIES = [
  { id: "transport", label: "เดินทาง", Icon: IconTransport, soft: "#E0EBF7", tone: "#1B3A5C" },
  { id: "food",      label: "อาหาร",   Icon: IconFood,      soft: "#FBE3D5", tone: "#E8693C" },
  { id: "stay",      label: "ที่พัก",   Icon: IconStay,      soft: "#F4E4CB", tone: "#D55427" },
  { id: "activity",  label: "กิจกรรม", Icon: IconActivity,  soft: "#FBE3D5", tone: "#E8693C" },
  { id: "shop",      label: "ช้อปปิ้ง", Icon: IconShop,      soft: "#FBE3D5", tone: "#E8693C" },
  { id: "other",     label: "อื่นๆ",    Icon: IconOther,     soft: "#FAF1DD", tone: "#E0B73B" },
];
const catOf = (id) => CATEGORIES.find((c) => c.id === id) || CATEGORIES[5];

/* ════════════════════════════════════════════════════════════════
   2. DECORATIVE SVGs — postcard accents
   ═══════════════════════════════════════════════════════════════ */

function PostageStamp({ children, color = "#E8693C", className = "", rotate = -3 }) {
  return (
    <div
      className={`inline-block relative px-3 py-2 ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, color }}
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <pattern id={`perf-${color}`} x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2.4" fill="#FAF1DD" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={color} />
        <rect x="3" y="3" width="94" height="94" fill="#FFFAF0" />
        <rect width="100" height="100" fill={`url(#perf-${color})`} style={{ mixBlendMode: "destination-out" }} />
      </svg>
      <span className="relative" style={{ color }}>{children}</span>
    </div>
  );
}

function DottedTravelPath({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none">
      <path d="M5 50 Q50 5 100 30 T195 15"
        stroke="#E0B73B" strokeWidth="2" strokeDasharray="3 5" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* tiny plane at the end */}
      <g transform="translate(192,12) rotate(-25)">
        <path d="M0 0 L-10 -3 L-12 -1 L-7 1 L-9 4 L-7 5 L-3 3 L0 5 Z" fill="#E8693C" />
      </g>
    </svg>
  );
}

function SailboatScene({ className = "" }) {
  // small cartoon sailboat for hero card decoration
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none">
      <defs>
        <radialGradient id="moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FAF1DD" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FAF1DD" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* moon glow */}
      <circle cx="20" cy="22" r="14" fill="url(#moon)" />
      <circle cx="20" cy="22" r="8" fill="#FAF1DD" opacity="0.95" />
      {/* stars */}
      <circle cx="50" cy="14" r="1" fill="#FAF1DD" />
      <circle cx="80" cy="20" r="0.8" fill="#FAF1DD" />
      <circle cx="100" cy="30" r="1" fill="#FAF1DD" />
      <circle cx="65" cy="32" r="0.6" fill="#FAF1DD" />
      {/* boat group */}
      <g className="animate-sail" style={{ transformOrigin: "70px 70px" }}>
        {/* sails */}
        <path d="M70 30 L70 65 L92 65 Z" fill="#FAF1DD" />
        <path d="M70 35 L70 65 L52 65 Z" fill="#E0B73B" />
        {/* mast */}
        <line x1="70" y1="28" x2="70" y2="68" stroke="#16304D" strokeWidth="1.5" />
        {/* flag */}
        <path d="M70 28 L78 30 L70 33 Z" fill="#E8693C" />
        {/* hull */}
        <path d="M48 68 L96 68 L88 78 L56 78 Z" fill="#E8693C" />
        <path d="M48 68 L96 68 L92 72 L52 72 Z" fill="#D55427" />
      </g>
    </svg>
  );
}

function VillaSilhouette({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 80" fill="none">
      <g opacity="0.18">
        {/* Colosseum-ish */}
        <ellipse cx="40" cy="68" rx="20" ry="6" fill="#1B3A5C" />
        <rect x="22" y="50" width="36" height="20" fill="#1B3A5C" />
        <rect x="26" y="54" width="3" height="10" fill="#FAF1DD" />
        <rect x="32" y="54" width="3" height="10" fill="#FAF1DD" />
        <rect x="38" y="54" width="3" height="10" fill="#FAF1DD" />
        <rect x="44" y="54" width="3" height="10" fill="#FAF1DD" />
        <rect x="50" y="54" width="3" height="10" fill="#FAF1DD" />
        {/* tower */}
        <rect x="80" y="40" width="10" height="30" fill="#1B3A5C" />
        <polygon points="80,40 85,30 90,40" fill="#1B3A5C" />
        {/* villa */}
        <rect x="105" y="48" width="40" height="22" fill="#1B3A5C" />
        <polygon points="103,48 125,34 147,48" fill="#1B3A5C" />
        <rect x="120" y="56" width="6" height="14" fill="#FAF1DD" />
        {/* tree */}
        <rect x="160" y="58" width="3" height="12" fill="#1B3A5C" />
        <circle cx="161.5" cy="56" r="6" fill="#1B3A5C" />
        <circle cx="166" cy="59" r="5" fill="#1B3A5C" />
      </g>
    </svg>
  );
}

function WalletLogo({ size = 36 }) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 40 34" fill="none">
      {/* wallet body */}
      <path d="M4 8 L36 8 L36 30 Q36 32 34 32 L6 32 Q4 32 4 30 Z" fill="#1B3A5C" />
      <path d="M4 8 L36 8 L34 12 L6 12 Z" fill="#16304D" />
      {/* card peeking */}
      <rect x="22" y="4" width="14" height="10" rx="1" fill="#E0B73B" />
      <rect x="20" y="2" width="14" height="10" rx="1" fill="#E8693C" />
      {/* button */}
      <circle cx="29" cy="20" r="3" fill="#E0B73B" />
      <circle cx="29" cy="20" r="1.2" fill="#1B3A5C" />
      {/* stitching */}
      <line x1="6" y1="16" x2="34" y2="16" stroke="#FAF1DD" strokeDasharray="2 2" strokeOpacity="0.4" strokeWidth="0.5" />
    </svg>
  );
}

function PassportStamp({ text = "BON VOYAGE", className = "", rotate = 5 }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <svg viewBox="0 0 120 60" className="w-full h-full">
        <rect x="2" y="2" width="116" height="56" fill="none" stroke="#C99E2A" strokeWidth="2" rx="3" />
        <rect x="6" y="6" width="108" height="48" fill="none" stroke="#C99E2A" strokeWidth="0.8" rx="2" />
        <text x="60" y="36" textAnchor="middle" fontFamily="'DM Serif Display', serif" fontSize="14" fill="#C99E2A" letterSpacing="2">{text}</text>
      </svg>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   3. AVATARS — DiceBear adventurer style (cartoon kids)
   ═══════════════════════════════════════════════════════════════ */

const dicebearUrl = (seed, color) => {
  // adventurer style — cute cartoon people with hats/glasses, similar to mockup
  const bg = (color || "#1B3A5C").replace("#", "");
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(seed)}&backgroundColor=${bg}&backgroundType=solid&radius=50`;
};

function CartoonAvatar({ m, size = 44, ring = false }) {
  if (!m) return null;
  return (
    <div
      className={`rounded-full overflow-hidden flex-shrink-0 ${ring ? "ring-[3px] ring-cream-100" : ""}`}
      style={{ width: size, height: size, background: m.color }}
    >
      <img
        src={dicebearUrl(m.id, m.color)}
        alt={m.name}
        width={size}
        height={size}
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}

function MascotCharacter({ seed = "TripSplitMascot", size = 72 }) {
  return (
    <div
      className="rounded-full overflow-hidden flex-shrink-0 ring-[3px] ring-cream-100"
      style={{ width: size, height: size, background: "#FBE3D5" }}
    >
      <img
        src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(seed)}&backgroundColor=fbe3d5&backgroundType=solid&radius=50`}
        alt="mascot"
        width={size}
        height={size}
        className="w-full h-full"
      />
    </div>
  );
}

function MemberCluster({ members, max = 5 }) {
  return (
    <div className="flex items-center -space-x-2">
      {members.slice(0, max).map((m) => (
        <CartoonAvatar key={m.id} m={m} size={34} ring />
      ))}
      {members.length > max && (
        <div className="w-9 h-9 rounded-full ring-[3px] ring-cream-100 bg-cream-300 flex items-center justify-center text-[11px] font-bold text-ink">
          +{members.length - max}
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   4. BUSINESS LOGIC (unchanged)
   ═══════════════════════════════════════════════════════════════ */

const tlv = (tag, v) => `${tag}${String(v.length).padStart(2, "0")}${v}`;
function crc16(s) {
  let crc = 0xffff;
  for (let i = 0; i < s.length; i++) {
    crc ^= s.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}
function ppTarget(t) {
  const d = (t || "").replace(/\D/g, "");
  if (d.length === 13) return tlv("02", d);
  return tlv("01", "0066" + d.replace(/^0/, ""));
}
function buildPP(target, amount) {
  if (!target) return "";
  const mai = tlv("00", "A000000677010111") + ppTarget(target);
  const p =
    tlv("00", "01") + tlv("01", amount > 0 ? "12" : "11") + tlv("29", mai) +
    tlv("53", "764") + (amount > 0 ? tlv("54", amount.toFixed(2)) : "") +
    tlv("58", "TH") + "6304";
  return p + crc16(p);
}

function simplify(balances) {
  const arr = Object.entries(balances)
    .map(([id, v]) => ({ id, v: Math.round(v * 100) / 100 }))
    .filter((x) => Math.abs(x.v) > 0.01);
  const debtors  = arr.filter((x) => x.v < 0).sort((a, b) => a.v - b.v);
  const creditors = arr.filter((x) => x.v > 0).sort((a, b) => b.v - a.v);
  const tx = [];
  let i = 0, j = 0;
  while (i < debtors.length && j < creditors.length) {
    const pay = Math.min(-debtors[i].v, creditors[j].v);
    tx.push({ from: debtors[i].id, to: creditors[j].id, amount: Math.round(pay * 100) / 100 });
    debtors[i].v += pay; creditors[j].v -= pay;
    if (Math.abs(debtors[i].v) < 0.01) i++;
    if (Math.abs(creditors[j].v) < 0.01) j++;
  }
  return tx;
}

const seedTrip = () => ({
  name: "เกาะสมุย 4 วัน 3 คืน", emoji: "🏝️", threshold: 2000,
  members: [
    { id: "m1-ploy",  name: "พลอย", phone: "0812345678", color: "#E8693C" },
    { id: "m2-non",   name: "นนท์", phone: "0823456789", color: "#1B3A5C" },
    { id: "m3-fah",   name: "ฟ้า",  phone: "0834567890", color: "#9BAE7E" },
    { id: "m4-jane",  name: "เจน",  phone: "0845678901", color: "#E0B73B" },
  ],
  topups: [
    { id: "t1", memberId: "m1-ploy", amount: 3000, ts: Date.now() - 864e5 * 3, note: "เริ่มทริป" },
    { id: "t2", memberId: "m2-non",  amount: 3000, ts: Date.now() - 864e5 * 3, note: "เริ่มทริป" },
    { id: "t3", memberId: "m3-fah",  amount: 3000, ts: Date.now() - 864e5 * 3, note: "เริ่มทริป" },
    { id: "t4", memberId: "m4-jane", amount: 3000, ts: Date.now() - 864e5 * 3, note: "เริ่มทริป" },
  ],
  expenses: [
    { id: "e1", title: "ตั๋วเรือเฟอร์รี่",   category: "transport", amount: 1600, ts: Date.now() - 864e5 * 3, payers: [{ id: "FUND", amount: 1600 }], splitAmong: ["m1-ploy","m2-non","m3-fah","m4-jane"] },
    { id: "e2", title: "บังกะโลริมหาด 2 คืน", category: "stay",      amount: 4800, ts: Date.now() - 864e5 * 2, payers: [{ id: "FUND", amount: 4800 }], splitAmong: ["m1-ploy","m2-non","m3-fah","m4-jane"] },
    { id: "e3", title: "อาหารทะเลมื้อเย็น",   category: "food",      amount: 1850, ts: Date.now() - 864e5 * 2, payers: [{ id: "m2-non", amount: 1850 }],   splitAmong: ["m1-ploy","m2-non","m3-fah","m4-jane"] },
    { id: "e4", title: "ดำน้ำเกาะเต่า",       category: "activity",  amount: 3200, ts: Date.now() - 864e5,      payers: [{ id: "m1-ploy", amount: 1600 }, { id: "m3-fah", amount: 1600 }], splitAmong: ["m1-ploy","m2-non","m3-fah","m4-jane"] },
    { id: "e5", title: "ของฝากร้านลุงพร",     category: "shop",      amount: 720,  ts: Date.now() - 36e5 * 4,  payers: [{ id: "m4-jane", amount: 720 }],    splitAmong: ["m1-ploy","m4-jane"] },
  ],
});

const fmt  = (n) => "฿" + Math.round(n).toLocaleString("th-TH");
const fmt2 = (n) => "฿" + n.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const ago = (ts) => {
  if (!ts) return "ยังไม่เคย";
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 5) return "เมื่อกี้";
  if (s < 60) return s + " วิ";
  if (s < 3600) return Math.floor(s / 60) + " นาที";
  if (s < 86400) return Math.floor(s / 3600) + " ชม.";
  return Math.floor(s / 86400) + " วัน";
};

function computeFund(trip) {
  const tops = trip.topups.reduce((s, t) => s + t.amount, 0);
  const fundOut = trip.expenses.flatMap((e) => e.payers).filter((p) => p.id === "FUND").reduce((s, p) => s + p.amount, 0);
  return { tops, fundOut, balance: tops - fundOut };
}

function computeBalances(trip) {
  const bal = {};
  trip.members.forEach((m) => (bal[m.id] = 0));
  trip.expenses.forEach((e) => {
    const fundPart = e.payers.filter((p) => p.id === "FUND").reduce((s, p) => s + p.amount, 0);
    const personalPart = e.amount - fundPart;
    e.payers.filter((p) => p.id !== "FUND").forEach((p) => { if (bal[p.id] != null) bal[p.id] += p.amount; });
    if (personalPart > 0 && e.splitAmong.length) {
      const each = personalPart / e.splitAmong.length;
      e.splitAmong.forEach((id) => { if (bal[id] != null) bal[id] -= each; });
    }
  });
  trip.topups.forEach((t) => { if (bal[t.memberId] != null) bal[t.memberId] += t.amount; });
  trip.expenses.forEach((e) => {
    const fundPart = e.payers.filter((p) => p.id === "FUND").reduce((s, p) => s + p.amount, 0);
    if (fundPart > 0 && e.splitAmong.length) {
      const each = fundPart / e.splitAmong.length;
      e.splitAmong.forEach((id) => { if (bal[id] != null) bal[id] -= each; });
    }
  });
  const fund = computeFund(trip);
  const totalTops = fund.tops || 1;
  trip.members.forEach((m) => {
    const myTop = trip.topups.filter((t) => t.memberId === m.id).reduce((s, t) => s + t.amount, 0);
    bal[m.id] -= (myTop / totalTops) * fund.balance;
  });
  return bal;
}

/* ════════════════════════════════════════════════════════════════
   5. SYNC — local-first + Apps Script (unchanged behavior)
   ═══════════════════════════════════════════════════════════════ */

const LS_API = "tripsplit_api_url";
const LS_DATA = "tripsplit_data";

async function apiGet(url) {
  const r = await fetch(url, { method: "GET", redirect: "follow" });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const j = await r.json();
  if (!j.ok) throw new Error(j.error || "Unknown server error");
  return j;
}
async function apiPost(url, action, payload) {
  const r = await fetch(url, { method: "POST", body: JSON.stringify({ action, ...payload }), redirect: "follow" });
  if (!r.ok) throw new Error("HTTP " + r.status);
  const j = await r.json();
  if (!j.ok) throw new Error(j.error || "Unknown server error");
  return j;
}

/* ════════════════════════════════════════════════════════════════
   6. UI BUILDING BLOCKS
   ═══════════════════════════════════════════════════════════════ */

/** Hero Fund card — postcard style with sailboat scene + wave */
function HeroFund({ balance, threshold, capacity, members, fund, onTopUp, onAdd }) {
  const cap = Math.max(capacity, balance, threshold * 1.5, 1);
  const pct = Math.max(0, Math.min(1, balance / cap));
  const low = balance < threshold;
  const contributors = members.filter((m) => fund.tops > 0); // simplified

  return (
    <div className="relative rounded-[28px] overflow-hidden cardstock bg-cream-50">
      {/* Top half — navy night sky with sailboat */}
      <div className="relative h-44" style={{ background: "linear-gradient(180deg,#1B3A5C 0%,#16304D 60%,#11243C 100%)" }}>
        <svg className="absolute inset-0 opacity-[0.10]" width="100%" height="100%" aria-hidden>
          <defs>
            <pattern id="dotsHero" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotsHero)" />
        </svg>
        {/* sailboat in upper right */}
        <SailboatScene className="absolute top-2 right-2 w-32 h-24" />
        {/* alert/badge */}
        <div className="absolute top-4 left-4 z-10">
          {low ? (
            <PostageStamp color="#D55427" rotate={-4}>
              <span className="text-[10px] font-bold tracking-widest text-coral-soft">ต่ำกว่าเกณฑ์</span>
            </PostageStamp>
          ) : (
            <div className="flex items-center gap-1.5 bg-cream-50/95 px-3 py-1.5 rounded-full text-[10px] font-bold text-navy tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> CENTRAL FUND
            </div>
          )}
        </div>

        {/* Balance number */}
        <div className="absolute bottom-3 left-5 right-5 z-10">
          <div className="text-cream-100/80 text-[10px] uppercase tracking-[0.25em] font-bold mb-0.5">ยอดคงเหลือ</div>
          <div className="font-display text-cream-50 text-5xl leading-none tabular tracking-tight">{fmt(balance)}</div>
        </div>
      </div>

      {/* Bottom half — cream w/ wave divider, action buttons */}
      <div className="relative pt-3 pb-5 px-5 bg-cream-50">
        {/* wave divider on top */}
        <svg className="absolute -top-[1px] left-0 right-0 w-full h-4" viewBox="0 0 400 16" preserveAspectRatio="none">
          <path d="M0 8 Q 50 0, 100 8 T 200 8 T 300 8 T 400 8 V0 H0 Z" fill="#11243C" />
        </svg>
        {/* meta line */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] text-ink2">
            จาก <span className="font-display tabular text-ink">{fmt(cap)}</span> · เตือนที่ <span className="tabular text-ink">{fmt(threshold)}</span>
          </div>
          <MemberCluster members={members} max={4} />
        </div>
        {/* progress */}
        <div className="relative h-2.5 bg-cream-200 rounded-full overflow-hidden mb-4">
          <div
            className="absolute inset-y-0 left-0 transition-all duration-700 rounded-full"
            style={{ width: `${pct * 100}%`, background: low ? "#D55427" : "linear-gradient(90deg,#E0B73B 0%,#E8693C 100%)" }}
          />
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button onClick={onTopUp} className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-cream-200/60 text-navy font-bold text-sm border border-cream-300/60 active:scale-[0.97] transition">
            <ArrowDownCircle size={18} /> เติมงบ
          </button>
          <button onClick={onAdd} className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-coral text-cream-50 font-bold text-sm shadow-coral active:scale-[0.97] transition">
            <Plus size={18} /> รายจ่ายใหม่
          </button>
        </div>
      </div>
    </div>
  );
}

/** Postcard mini-card (replaces stat sticker) */
function MiniCard({ label, value, tone = "#FBE3D5", icon, rotate = 0 }) {
  return (
    <div
      className="rounded-2xl p-3.5 cardstock relative"
      style={{ background: tone, transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex items-start justify-between mb-1">
        <div className="text-[9px] uppercase tracking-[0.18em] font-bold text-ink2">{label}</div>
        {icon && <div className="text-base opacity-70">{icon}</div>}
      </div>
      <div className="font-display text-ink text-xl tabular leading-tight">{value}</div>
    </div>
  );
}

/** Mascot tip card — shows a cartoon character + advice */
function MascotTip({ children, mascotSeed = "MascotTip", className = "" }) {
  return (
    <div className={`flex items-start gap-3 p-3.5 rounded-2xl bg-cream-50 border border-cream-200 ${className}`}>
      <MascotCharacter seed={mascotSeed} size={48} />
      <div className="flex-1 pt-1">
        <div className="text-xs leading-relaxed text-ink2">{children}</div>
      </div>
    </div>
  );
}

/** Modal */
function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50" onClick={onClose}>
      <div className="w-full max-w-md bg-cream-50 rounded-t-[32px] max-h-[92vh] overflow-y-auto animate-slide" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-cream-50 pt-5 pb-3 px-6 flex items-center justify-between rounded-t-[32px] z-10 border-b border-cream-200">
          <div className="w-10 h-1 bg-cream-300 rounded-full absolute left-1/2 -translate-x-1/2 top-2.5" />
          <h3 className="font-display text-2xl text-ink mt-1">{title}</h3>
          <button onClick={onClose} className="mt-1 w-10 h-10 rounded-full bg-cream-200 flex items-center justify-center active:scale-95">
            <X size={18} className="text-ink2" />
          </button>
        </div>
        <div className="p-6 pt-4">{children}</div>
      </div>
    </div>
  );
}

const Field = ({ label, children }) => (
  <div className="mb-5">
    <label className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink2 mb-2 block">{label}</label>
    {children}
  </div>
);

const inputCls = "w-full px-5 py-4 rounded-2xl bg-cream-100 border border-cream-200 focus:outline-none focus:ring-2 focus:ring-navy text-ink placeholder:text-ink2/40";

/* ════════════════════════════════════════════════════════════════
   7. SYNC INDICATOR (header pill)
   ═══════════════════════════════════════════════════════════════ */

function SyncBar({ apiUrl, sync, onRefresh, onOpenSettings }) {
  const status = !apiUrl ? "local" : sync.status === "syncing" ? "syncing" : sync.error ? "error" : "ok";
  const Icon = { local: CloudOff, syncing: Loader2, error: CloudOff, ok: Cloud }[status];
  const tone = { local: "text-ink2/50", syncing: "text-navy", error: "text-coral-600", ok: "text-sage-600" }[status];
  const label = {
    local:   "เครื่องเดียว",
    syncing: "sync...",
    error:   "เชื่อมต่อไม่ได้",
    ok:      "sync " + ago(sync.at),
  }[status];
  return (
    <button
      onClick={apiUrl ? onRefresh : onOpenSettings}
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cream-50 border border-cream-300/60 active:scale-95 transition"
    >
      <Icon size={11} className={`${tone} ${status === "syncing" ? "animate-spin" : ""}`} />
      <span className="text-[10px] font-bold text-ink2">{label}</span>
    </button>
  );
}

/* ════════════════════════════════════════════════════════════════
   8. FORMS
   ═══════════════════════════════════════════════════════════════ */

function ExpenseForm({ trip, onSave, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("food");
  const [amount, setAmount] = useState("");
  const [payerMode, setPayerMode] = useState("FUND");
  const [singlePayer, setSinglePayer] = useState(trip.members[0]?.id || "");
  const [multiPayers, setMultiPayers] = useState({});
  const [splitAmong, setSplitAmong] = useState(trip.members.map((m) => m.id));

  const numAmount = parseFloat(amount) || 0;
  const multiTotal = Object.values(multiPayers).reduce((s, v) => s + (parseFloat(v) || 0), 0);
  const multiOk = payerMode !== "multi" || Math.abs(multiTotal - numAmount) < 0.01;

  const toggleSplit = (id) => setSplitAmong((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const setMulti = (id, v) => setMultiPayers((m) => ({ ...m, [id]: v }));

  const submit = () => {
    if (!title || !numAmount || splitAmong.length === 0) return;
    if (payerMode === "multi" && !multiOk) return;
    let payers;
    if (payerMode === "FUND") payers = [{ id: "FUND", amount: numAmount }];
    else if (payerMode === "single") payers = [{ id: singlePayer, amount: numAmount }];
    else payers = Object.entries(multiPayers).map(([id, v]) => ({ id, amount: parseFloat(v) || 0 })).filter((p) => p.amount > 0);
    onSave({ id: "e" + Date.now() + Math.floor(Math.random() * 999), title, category, amount: numAmount, ts: Date.now(), payers, splitAmong });
    onClose();
  };

  return (
    <div>
      <Field label="จำนวนเงิน">
        <div className="rounded-2xl border-2 border-dashed border-coral/50 p-4 bg-coral/5">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-coral-600 mb-1">Amount (THB)</div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-coral text-3xl">฿</span>
            <input type="number" inputMode="decimal" autoFocus value={amount} onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00" className="w-full bg-transparent border-0 focus:outline-none font-display text-coral text-4xl tabular" />
          </div>
        </div>
      </Field>

      <Field label="รายการ">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="เช่น ข้าวเย็นที่ร้านลุงพร" className={inputCls} />
      </Field>

      <Field label="หมวดหมู่">
        <div className="grid grid-cols-3 gap-2.5">
          {CATEGORIES.map((c) => {
            const active = c.id === category;
            return (
              <button key={c.id} onClick={() => setCategory(c.id)}
                className={`p-3 rounded-2xl flex flex-col items-center gap-1 transition-all border-2 ${active ? "border-coral bg-coral/5" : "border-cream-200 bg-cream-50"}`}>
                <c.Icon size={48} />
                <span className="text-[11px] font-bold text-ink">{c.label}</span>
              </button>
            );
          })}
        </div>
      </Field>

      <Field label="ใครจ่าย?">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ id: "FUND", label: "งบกลาง" }, { id: "single", label: "1 คน" }, { id: "multi", label: "หลายคน" }].map((o) => (
            <button key={o.id} onClick={() => setPayerMode(o.id)}
              className={`py-3 rounded-2xl text-sm font-bold transition-all ${payerMode === o.id ? "bg-navy text-cream-50 shadow-soft" : "bg-cream-100 text-ink"}`}>
              {o.label}
            </button>
          ))}
        </div>
        {payerMode === "single" && (
          <div className="grid grid-cols-2 gap-2">
            {trip.members.map((m) => (
              <button key={m.id} onClick={() => setSinglePayer(m.id)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl transition-all border-2 ${singlePayer === m.id ? "border-navy bg-navy/5" : "border-cream-200 bg-cream-50"}`}>
                <CartoonAvatar m={m} size={28} />
                <span className="text-sm font-bold text-ink">{m.name}</span>
              </button>
            ))}
          </div>
        )}
        {payerMode === "multi" && (
          <div className="space-y-2 bg-cream-100 rounded-2xl p-3 border border-cream-200">
            {trip.members.map((m) => (
              <div key={m.id} className="flex items-center gap-3">
                <CartoonAvatar m={m} size={32} />
                <span className="text-sm flex-1 text-ink font-medium">{m.name}</span>
                <input type="number" value={multiPayers[m.id] || ""} onChange={(e) => setMulti(m.id, e.target.value)}
                  placeholder="0" className="w-24 px-3 py-2 rounded-xl bg-cream-50 text-right tabular focus:outline-none focus:ring-2 focus:ring-navy border border-cream-200" />
              </div>
            ))}
            <div className={`text-xs text-right font-bold pt-1 ${multiOk ? "text-sage-600" : "text-coral-600"}`}>
              {multiOk ? "✓ " : "⚠ "} รวม {fmt(multiTotal)} / ต้องเป็น {fmt(numAmount)}
            </div>
          </div>
        )}
      </Field>

      <Field label={`หารกัน (${splitAmong.length} คน)`}>
        <div className="flex flex-wrap gap-2">
          {trip.members.map((m) => {
            const on = splitAmong.includes(m.id);
            return (
              <button key={m.id} onClick={() => toggleSplit(m.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${on ? "bg-navy text-cream-50" : "bg-cream-100 text-ink2/60 border border-cream-200"}`}>
                <CartoonAvatar m={m} size={22} />
                <span className="text-sm font-bold">{m.name}</span>
                {on && <Check size={14} />}
              </button>
            );
          })}
        </div>
        {splitAmong.length > 0 && numAmount > 0 && (
          <div className="text-xs text-ink2 mt-3 px-1">
            หารคนละ <span className="font-display tabular text-ink">{fmt2(numAmount / splitAmong.length)}</span>
          </div>
        )}
      </Field>

      <MascotTip mascotSeed="ExpenseTip" className="mb-4">
        💡 <span className="font-bold">Tip:</span> ใส่คำอธิบายชัดๆ เพื่อนๆ จะได้จำได้ว่ารายการนี้คืออะไร!
      </MascotTip>

      <button onClick={submit}
        disabled={!title || !numAmount || splitAmong.length === 0 || (payerMode === "multi" && !multiOk)}
        className="w-full py-4 rounded-2xl font-display text-cream-50 text-xl disabled:opacity-30 transition-all bg-coral shadow-coral active:scale-[0.98]">
        บันทึกรายจ่าย
      </button>
    </div>
  );
}

function TopUpForm({ trip, onSave, onClose }) {
  const [memberId, setMemberId] = useState(trip.members[0]?.id || "");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const submit = () => {
    const amt = parseFloat(amount);
    if (!amt || !memberId) return;
    onSave({ id: "t" + Date.now() + Math.floor(Math.random() * 999), memberId, amount: amt, note: note || "เติมเงิน", ts: Date.now() });
    onClose();
  };
  return (
    <div>
      <Field label="ใครเป็นคนเติม">
        <div className="grid grid-cols-2 gap-2">
          {trip.members.map((m) => (
            <button key={m.id} onClick={() => setMemberId(m.id)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-2xl transition-all border-2 ${memberId === m.id ? "border-navy bg-navy/5" : "border-cream-200 bg-cream-50"}`}>
              <CartoonAvatar m={m} size={28} />
              <span className="text-sm font-bold text-ink">{m.name}</span>
            </button>
          ))}
        </div>
      </Field>
      <Field label="จำนวนเงิน">
        <div className="rounded-2xl border-2 border-dashed border-navy/40 p-4 bg-navy/5">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy mb-1">Top-up (THB)</div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-navy text-3xl">฿</span>
            <input type="number" autoFocus value={amount} onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00" className="w-full bg-transparent border-0 focus:outline-none font-display text-navy text-4xl tabular" />
          </div>
        </div>
      </Field>
      <Field label="บันทึก (ไม่บังคับ)">
        <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="เช่น เริ่มทริป" className={inputCls} />
      </Field>
      <button onClick={submit} className="w-full py-4 rounded-2xl font-display text-cream-50 text-xl bg-navy shadow-hero active:scale-[0.98]">
        เติมเข้างบกลาง
      </button>
    </div>
  );
}

function MemberForm({ onSave, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const palette = ["#E8693C", "#1B3A5C", "#9BAE7E", "#E0B73B", "#D55427", "#16304D", "#7E9263"];
  const submit = () => {
    if (!name) return;
    const id = "m" + Date.now() + "-" + name.toLowerCase().replace(/\s+/g, "");
    onSave({ id, name, phone: phone.replace(/\D/g, ""), color: palette[Math.floor(Math.random() * palette.length)] });
    onClose();
  };
  return (
    <div>
      <MascotTip mascotSeed="MemberTip" className="mb-5">
        เพิ่มเพื่อนแล้วใส่เบอร์ PromptPay ของเขาด้วย จะได้สร้าง QR ให้คนอื่นโอนคืนได้ตอนสรุปทริป 🎉
      </MascotTip>
      <Field label="ชื่อเล่น">
        <input autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="เช่น พลอย" className={inputCls} />
      </Field>
      <Field label="เบอร์ PromptPay">
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="081 234 5678" inputMode="tel" className={inputCls} />
      </Field>
      <button onClick={submit} className="w-full py-4 rounded-2xl font-display text-cream-50 text-xl bg-navy shadow-hero active:scale-[0.98]">
        เพิ่มสมาชิก
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   9. SLIP / QR
   ═══════════════════════════════════════════════════════════════ */

function SlipView({ trip, member, balance, settlements }) {
  const owedTo = settlements.filter((s) => s.from === member.id);
  const owedFrom = settlements.filter((s) => s.to === member.id);
  const myExpenses = trip.expenses.filter((e) => e.splitAmong.includes(member.id));

  return (
    <div>
      {/* Postcard header */}
      <div className="rounded-3xl p-5 mb-5 relative overflow-hidden cardstock" style={{ background: "linear-gradient(135deg,#FBE3D5 0%,#FAF1DD 100%)" }}>
        <PassportStamp text="MY SLIP" className="absolute top-3 right-3 w-20 h-10" rotate={5} />
        <DottedTravelPath className="absolute top-2 left-0 w-32 h-12 opacity-60" />
        <div className="flex items-center gap-3 mt-6">
          <CartoonAvatar m={member} size={56} ring />
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-navy">สลิปส่วนตัว</div>
            <div className="font-display text-2xl text-ink">{member.name}</div>
            <div className="text-xs text-ink2">{trip.name}</div>
          </div>
        </div>
      </div>

      <div className="mb-5 px-1">
        <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink2 mb-1">สถานะสุทธิ</div>
        <div className={`font-display text-4xl tabular ${balance >= 0 ? "text-sage-600" : "text-coral-600"}`}>
          {balance >= 0 ? "+" : ""}{fmt2(balance)}
        </div>
        <div className="text-xs text-ink2 mt-1">
          {Math.abs(balance) < 0.5 ? "เสมอตัวพอดี ไม่มีอะไรต้องจ่ายคืนแล้ว ✨" : balance >= 0 ? "เพื่อนต้องคืนเงินรวม" : "คุณต้องโอนคืนเพื่อนรวม"}
          {Math.abs(balance) >= 0.5 && " " + fmt2(Math.abs(balance))}
        </div>
      </div>

      {myExpenses.length > 0 && (
        <div className="mb-5">
          <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink2 mb-2 px-1">รายการของคุณ ({myExpenses.length})</div>
          <div className="space-y-1.5 max-h-44 overflow-y-auto bg-cream-100 rounded-2xl p-3 border border-cream-200">
            {myExpenses.map((e) => {
              const C = catOf(e.category);
              return (
                <div key={e.id} className="flex items-center gap-2 text-sm">
                  <C.Icon size={22} />
                  <span className="flex-1 truncate text-ink">{e.title}</span>
                  <span className="text-ink2 text-xs tabular font-bold">{fmt2(e.amount / e.splitAmong.length)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {owedTo.length > 0 && (
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink2 px-1">สแกนเพื่อโอนคืน</div>
          {owedTo.map((s, i) => {
            const to = trip.members.find((m) => m.id === s.to);
            if (!to) return null;
            const payload = buildPP(to.phone, s.amount);
            const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(payload)}`;
            return (
              <div key={i} className="rounded-3xl p-6 flex flex-col items-center bg-cream-50 cardstock">
                <div className="flex items-center gap-3 mb-3">
                  <CartoonAvatar m={to} size={44} />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-ink2 font-bold">โอนให้</div>
                    <div className="font-display text-xl text-ink">{to.name}</div>
                  </div>
                </div>
                <div className="font-display text-coral text-4xl mb-3 tabular">{fmt2(s.amount)}</div>
                <div className="rounded-2xl p-3 bg-cream-100 border border-cream-200">
                  <img src={qrUrl} alt="PromptPay QR" className="w-44 h-44" />
                </div>
                <div className="text-[10px] text-ink2 mt-3 tracking-[0.25em] font-bold">PROMPTPAY · {to.phone}</div>
              </div>
            );
          })}
        </div>
      )}

      {owedFrom.length > 0 && (
        <div className="mt-5">
          <div className="text-[11px] uppercase tracking-[0.18em] font-bold text-ink2 mb-2 px-1">เพื่อนต้องโอนคืนคุณ</div>
          <div className="space-y-2">
            {owedFrom.map((s, i) => {
              const from = trip.members.find((m) => m.id === s.from);
              if (!from) return null;
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-cream-100 border border-cream-200">
                  <CartoonAvatar m={from} size={36} />
                  <span className="flex-1 font-bold text-ink">{from.name}</span>
                  <span className="font-display text-navy tabular">{fmt2(s.amount)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   10. SETTINGS (cloud sync)
   ═══════════════════════════════════════════════════════════════ */

function SettingsForm({ apiUrl, onSave, onClose, onReset }) {
  const [url, setUrl] = useState(apiUrl);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const test = async () => {
    if (!url) return;
    setTesting(true); setTestResult(null);
    try {
      const j = await apiGet(url.trim());
      setTestResult({ ok: true, msg: `✓ เชื่อมต่อสำเร็จ — สมาชิก ${(j.trip?.members || []).length} คน · รายจ่าย ${(j.trip?.expenses || []).length} รายการ` });
    } catch (err) {
      setTestResult({ ok: false, msg: "✗ " + err.message });
    } finally { setTesting(false); }
  };

  return (
    <div>
      <MascotTip mascotSeed="SyncTip" className="mb-5">
        ☁ เชื่อมกับ Google Sheets เพื่อให้เพื่อนทุกคนเห็นข้อมูลเดียวกัน — ทำตามคู่มือ <span className="font-bold">SETUP-SYNC.md</span> เอา URL มาใส่ที่นี่
      </MascotTip>

      <Field label="Apps Script Web App URL">
        <textarea value={url} onChange={(e) => setUrl(e.target.value)}
          placeholder="https://script.google.com/macros/s/..../exec"
          rows={3} className={inputCls + " text-xs font-mono break-all"} />
      </Field>

      {testResult && (
        <div className={`text-xs p-3 rounded-2xl mb-4 border ${testResult.ok ? "bg-sage-500/10 text-sage-600 border-sage-500/30" : "bg-coral/10 text-coral-600 border-coral/30"}`}>
          {testResult.msg}
        </div>
      )}

      <div className="grid grid-cols-2 gap-2 mb-4">
        <button onClick={test} disabled={!url || testing}
          className="py-3 rounded-2xl text-sm font-bold bg-cream-100 text-ink border border-cream-200 disabled:opacity-40 active:scale-[0.98]">
          {testing ? "กำลังทดสอบ..." : "ทดสอบเชื่อมต่อ"}
        </button>
        <button onClick={() => { onSave(url.trim()); onClose(); }} disabled={!url}
          className="py-3 rounded-2xl text-sm font-display bg-navy text-cream-50 disabled:opacity-40 active:scale-[0.98]">
          บันทึก URL
        </button>
      </div>

      {apiUrl && (
        <button onClick={() => {
            if (confirm("เลิก sync กับ cloud? ข้อมูลในเครื่องจะยังอยู่")) { onSave(""); onClose(); }
          }}
          className="w-full py-3 rounded-2xl text-sm font-bold bg-coral/10 text-coral-600 active:scale-[0.98] mb-2 border border-coral/20">
          เลิกใช้ cloud sync
        </button>
      )}

      <button onClick={() => {
          if (confirm("รีเซ็ตข้อมูลทั้งหมดกลับเป็นทริปสมุยตัวอย่าง?")) { onReset(); onClose(); }
        }}
        className="w-full py-3 rounded-2xl text-sm font-bold text-ink2/60 active:scale-[0.98]">
        รีเซ็ตเป็นข้อมูลตัวอย่าง
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   11. TABS
   ═══════════════════════════════════════════════════════════════ */

function Dashboard({ trip, fund, balances, onAddExpense, onTopUp }) {
  const totalSpent = trip.expenses.reduce((s, e) => s + e.amount, 0);
  const recent = [...trip.expenses].sort((a, b) => b.ts - a.ts).slice(0, 5);

  return (
    <div className="px-5 pb-32 pt-3 space-y-5">
      <HeroFund balance={fund.balance} threshold={trip.threshold} capacity={fund.tops} members={trip.members} fund={fund} onTopUp={onTopUp} onAdd={onAddExpense} />

      {/* Mini stat cards in postcard mini-card style */}
      <div className="grid grid-cols-3 gap-2.5">
        <MiniCard label="ใช้ไปแล้ว" value={fmt(totalSpent)} tone="#FBE3D5" icon="💸" rotate={-1} />
        <MiniCard label="รายการ"   value={trip.expenses.length} tone="#E0EBF7" icon="🧾" rotate={0.5} />
        <MiniCard label="สมาชิก"   value={trip.members.length} tone="#E5E9DC" icon="👥" rotate={-0.5} />
      </div>

      {/* Member balances */}
      <div>
        <div className="flex items-center justify-between px-1 mb-2.5">
          <h3 className="font-display text-xl text-ink">สถานะการเงิน</h3>
          <TrendingUp size={16} className="text-ink2/40" />
        </div>
        <div className="space-y-2">
          {trip.members.map((m) => {
            const v = balances[m.id] || 0;
            const settled = Math.abs(v) < 0.5;
            return (
              <div key={m.id} className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50 cardstock">
                <CartoonAvatar m={m} size={42} ring />
                <div className="flex-1 min-w-0">
                  <div className="font-display text-ink text-base leading-tight">{m.name}</div>
                  <div className="text-[11px] text-ink2/60 tabular">{m.phone}</div>
                </div>
                <div className={`font-display tabular text-base ${settled ? "text-ink2/30" : v > 0 ? "text-sage-600" : "text-coral-600"}`}>
                  {settled ? "เสมอตัว" : (v > 0 ? "+" : "") + fmt2(v)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent activity */}
      <div>
        <div className="flex items-center justify-between px-1 mb-2.5">
          <h3 className="font-display text-xl text-ink">กิจกรรมล่าสุด</h3>
          <span className="text-xs text-ink2/60">{trip.expenses.length} รายการ</span>
        </div>
        <div className="space-y-2">
          {recent.map((e) => {
            const C = catOf(e.category);
            const fundPaid = e.payers.some((p) => p.id === "FUND");
            return (
              <div key={e.id} className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50 cardstock">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: C.soft }}>
                  <C.Icon size={36} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-ink truncate">{e.title}</div>
                  <div className="text-[11px] text-ink2/60 truncate">
                    {fundPaid ? "🏛️ งบกลาง" : e.payers.map((p) => trip.members.find((m) => m.id === p.id)?.name).filter(Boolean).join(", ") + " สำรอง"}
                    {" · "}หาร {e.splitAmong.length}
                  </div>
                </div>
                <div className="font-display text-ink tabular">{fmt(e.amount)}</div>
              </div>
            );
          })}
          {recent.length === 0 && (
            <div className="text-center py-10 text-ink2/40 rounded-3xl border-2 border-dashed border-cream-300">
              <div className="text-3xl mb-2">📝</div>ยังไม่มีรายการ
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ExpensesTab({ trip, onDelete, onAdd }) {
  const grouped = useMemo(() => {
    const sorted = [...trip.expenses].sort((a, b) => b.ts - a.ts);
    const map = {};
    sorted.forEach((e) => {
      const d = new Date(e.ts).toLocaleDateString("th-TH", { day: "2-digit", month: "short" });
      (map[d] = map[d] || []).push(e);
    });
    return map;
  }, [trip.expenses]);
  const [openId, setOpenId] = useState(null);

  return (
    <div className="px-5 pb-32 pt-3 space-y-5">
      <div className="flex items-end justify-between px-1">
        <div>
          <div className="font-display text-3xl text-ink leading-none">รายจ่าย<br/><span className="text-coral">ทั้งหมด</span></div>
          <div className="text-sm text-ink2 mt-2">{trip.expenses.length} รายการ · รวม <span className="font-display text-ink tabular">{fmt(trip.expenses.reduce((s, e) => s + e.amount, 0))}</span></div>
        </div>
        <button onClick={onAdd} className="w-14 h-14 rounded-2xl flex items-center justify-center text-cream-50 shadow-coral bg-coral active:scale-95 transition">
          <Plus size={26} />
        </button>
      </div>

      {Object.entries(grouped).map(([date, items]) => (
        <div key={date}>
          <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-ink2/70 mb-2 px-1">— {date} —</div>
          <div className="space-y-2">
            {items.map((e) => {
              const C = catOf(e.category);
              const open = openId === e.id;
              const fundPaid = e.payers.some((p) => p.id === "FUND");
              return (
                <div key={e.id} className="rounded-2xl overflow-hidden bg-cream-50 cardstock">
                  <button onClick={() => setOpenId(open ? null : e.id)} className="w-full flex items-center gap-3 p-3 text-left">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: C.soft }}>
                      <C.Icon size={36} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-ink truncate">{e.title}</div>
                      <div className="text-[11px] text-ink2/60 truncate">
                        {fundPaid ? "🏛️ งบกลาง" : e.payers.length > 1 ? `👥 ${e.payers.length} คนสำรอง` : trip.members.find((m) => m.id === e.payers[0].id)?.name}
                        {" · "}{fmt(e.amount / e.splitAmong.length)}/คน
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-ink tabular">{fmt(e.amount)}</div>
                      <ChevronRight size={16} className={`text-ink2/30 ml-auto transition-transform ${open ? "rotate-90" : ""}`} />
                    </div>
                  </button>
                  {open && (
                    <div className="px-3.5 pb-3.5 pt-1 border-t border-cream-200 space-y-3 bg-cream-100/50">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink2/60 mt-2 mb-1.5">ผู้สำรองจ่าย</div>
                        <div className="flex flex-wrap gap-1.5">
                          {e.payers.map((p, i) => {
                            const m = p.id === "FUND" ? null : trip.members.find((mm) => mm.id === p.id);
                            return (
                              <div key={i} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs bg-cream-50 border border-cream-200">
                                {p.id === "FUND" ? <><PiggyBank size={12} className="text-navy" /> งบกลาง</> : m ? <><CartoonAvatar m={m} size={18} /><span>{m.name}</span></> : <span>?</span>}
                                <span className="font-display text-ink tabular">{fmt(p.amount)}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-ink2/60 mb-1.5">หารกัน</div>
                        <div className="flex flex-wrap gap-1.5">
                          {e.splitAmong.map((id) => {
                            const m = trip.members.find((mm) => mm.id === id);
                            return m ? (
                              <div key={id} className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-cream-50 text-xs border border-cream-200">
                                <CartoonAvatar m={m} size={16} /><span>{m.name}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                      <button onClick={() => onDelete(e.id)} className="flex items-center gap-1 text-coral-600 text-xs font-bold pt-1">
                        <Trash2 size={14} /> ลบรายการนี้
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      {trip.expenses.length === 0 && (
        <div className="text-center py-12 text-ink2/40 rounded-3xl border-2 border-dashed border-cream-300">
          <div className="text-4xl mb-2">📝</div>
          ยังไม่มีรายจ่าย<br/>กดปุ่ม + เพื่อบันทึกอันแรก
        </div>
      )}
    </div>
  );
}

function FundTab({ trip, fund, onTopUp }) {
  const perMember = trip.members.map((m) => ({
    ...m,
    myTops: trip.topups.filter((t) => t.memberId === m.id).reduce((s, t) => s + t.amount, 0),
  }));
  const fundExpenses = trip.expenses.filter((e) => e.payers.some((p) => p.id === "FUND"));
  return (
    <div className="px-5 pb-32 pt-3 space-y-5">
      <div className="rounded-[28px] p-7 text-cream-50 relative overflow-hidden cardstock" style={{ background: "linear-gradient(135deg,#1B3A5C 0%,#16304D 100%)" }}>
        <SailboatScene className="absolute -top-2 -right-2 w-32 h-24 opacity-80" />
        <PassportStamp text="TREASURY" className="absolute bottom-3 right-3 w-20 h-10" rotate={-5} />
        <div className="text-cream-100/70 text-[10px] uppercase tracking-[0.25em] font-bold">งบกลาง</div>
        <div className="font-display text-5xl tabular mt-1">{fmt(fund.balance)}</div>
        <div className="text-xs opacity-70 mt-2">เติมแล้ว {fmt(fund.tops)} · จ่ายไป {fmt(fund.fundOut)}</div>
        <button onClick={onTopUp} className="mt-5 px-5 py-3 rounded-full bg-cream-50 text-navy text-sm font-display inline-flex items-center gap-2 shadow-soft active:scale-95">
          <Plus size={16} /> เติมเงิน
        </button>
      </div>

      <div>
        <h3 className="font-display text-xl text-ink mb-2.5 px-1">ใครเติมเท่าไหร่</h3>
        <div className="rounded-2xl overflow-hidden bg-cream-50 cardstock">
          {perMember.map((m, i) => (
            <div key={m.id} className={`flex items-center gap-3 p-3 ${i > 0 ? "border-t border-cream-200" : ""}`}>
              <CartoonAvatar m={m} size={42} ring />
              <div className="flex-1">
                <div className="font-display text-ink text-base leading-tight">{m.name}</div>
                <div className="text-[11px] text-ink2/60">{fund.tops > 0 ? Math.round((m.myTops / fund.tops) * 100) : 0}% ของกองกลาง</div>
              </div>
              <div className="font-display text-ink tabular">{fmt(m.myTops)}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl text-ink mb-2.5 px-1">ประวัติเติม</h3>
        <div className="space-y-2">
          {[...trip.topups].sort((a, b) => b.ts - a.ts).map((t) => {
            const m = trip.members.find((mm) => mm.id === t.memberId);
            return (
              <div key={t.id} className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50 cardstock">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-sage-500/15">
                  <ArrowDownCircle size={18} className="text-sage-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-ink">{m?.name || "?"} · {t.note}</div>
                  <div className="text-[11px] text-ink2/60">{new Date(t.ts).toLocaleDateString("th-TH")}</div>
                </div>
                <div className="font-display text-sage-600 tabular">+{fmt(t.amount)}</div>
              </div>
            );
          })}
          {trip.topups.length === 0 && <div className="text-sm text-ink2/40 text-center py-6">ยังไม่มี</div>}
        </div>
      </div>

      {fundExpenses.length > 0 && (
        <div>
          <h3 className="font-display text-xl text-ink mb-2.5 px-1">จ่ายออกจากงบ</h3>
          <div className="space-y-2">
            {fundExpenses.map((e) => {
              const C = catOf(e.category);
              const fundAmt = e.payers.filter((p) => p.id === "FUND").reduce((s, p) => s + p.amount, 0);
              return (
                <div key={e.id} className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50 cardstock">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: C.soft }}>
                    <C.Icon size={30} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-ink">{e.title}</div>
                    <div className="text-[11px] text-ink2/60">{new Date(e.ts).toLocaleDateString("th-TH")}</div>
                  </div>
                  <div className="font-display text-coral-600 tabular">-{fmt(fundAmt)}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function SettleTab({ trip, balances, settlements, onShowSlip }) {
  const total = trip.expenses.reduce((s, e) => s + e.amount, 0);
  return (
    <div className="px-5 pb-32 pt-3 space-y-5">
      {/* Trip summary postcard */}
      <div className="rounded-[28px] p-6 relative overflow-hidden cardstock" style={{ background: "linear-gradient(135deg,#FBE3D5 0%,#FAF1DD 100%)" }}>
        <VillaSilhouette className="absolute bottom-0 left-0 w-full h-20" />
        <PassportStamp text="BON VOYAGE" className="absolute top-3 right-3 w-24 h-12" rotate={6} />
        <DottedTravelPath className="absolute top-1/3 left-0 w-full h-12 opacity-60" />
        <div className="relative">
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-navy">สรุปทริป</div>
          <div className="font-display text-2xl text-ink mt-1 flex items-center gap-1.5">
            <span>{trip.emoji}</span><span>{trip.name}</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5">
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-ink2">รวม</div>
              <div className="font-display text-lg tabular text-ink">{fmt(total)}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-ink2">เฉลี่ย/คน</div>
              <div className="font-display text-lg tabular text-ink">{trip.members.length ? fmt(total / trip.members.length) : "—"}</div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-ink2">รายการ</div>
              <div className="font-display text-lg tabular text-ink">{trip.expenses.length}</div>
            </div>
          </div>
          <div className="mt-4">
            <MemberCluster members={trip.members} max={6} />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-end justify-between mb-2.5 px-1">
          <h3 className="font-display text-xl text-ink">โอนคืนกัน</h3>
          <span className="text-xs text-ink2/60">{settlements.length} ครั้ง</span>
        </div>
        <MascotTip mascotSeed="SettleTip" className="mb-3">
          ✨ เราหักลบกลบหนี้ให้แล้ว — โอนแค่ {settlements.length} ครั้ง แทนที่จะโอนรายตัว!
        </MascotTip>
        <div className="space-y-2">
          {settlements.length === 0 ? (
            <div className="text-center py-10 text-ink2/40 text-sm rounded-3xl border-2 border-dashed border-cream-300">
              <div className="text-4xl mb-2">🎉</div>ทุกคนเสมอตัวแล้ว!
            </div>
          ) : settlements.map((s, i) => {
            const from = trip.members.find((m) => m.id === s.from);
            const to = trip.members.find((m) => m.id === s.to);
            if (!from || !to) return null;
            return (
              <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-cream-50 cardstock">
                <CartoonAvatar m={from} size={36} />
                <ArrowRight size={16} className="text-ink2/40" />
                <CartoonAvatar m={to} size={36} />
                <div className="flex-1 px-1 min-w-0">
                  <div className="text-sm text-ink truncate">
                    <span className="font-display">{from.name}</span>
                    <span className="text-ink2"> → </span>
                    <span className="font-display">{to.name}</span>
                  </div>
                </div>
                <div className="font-display text-coral-600 tabular">{fmt2(s.amount)}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl text-ink mb-2.5 px-1">สลิปส่วนตัว + QR</h3>
        <div className="space-y-2">
          {trip.members.map((m) => {
            const v = balances[m.id] || 0;
            const settled = Math.abs(v) < 0.5;
            return (
              <button key={m.id} onClick={() => onShowSlip(m)}
                className="w-full flex items-center gap-3 p-3 rounded-2xl bg-cream-50 cardstock active:scale-[0.98] transition-transform">
                <CartoonAvatar m={m} size={40} ring />
                <div className="flex-1 text-left">
                  <div className="font-display text-ink">{m.name}</div>
                  <div className="text-[11px] text-ink2/60">แตะเพื่อดู QR PromptPay</div>
                </div>
                <div className={`text-right font-display tabular text-sm ${settled ? "text-ink2/30" : v > 0 ? "text-sage-600" : "text-coral-600"}`}>
                  {settled ? "เสมอ" : (v > 0 ? "+" : "") + fmt(v)}
                </div>
                <div className="w-9 h-9 rounded-xl bg-cream-200 flex items-center justify-center">
                  <QrCode size={16} className="text-navy" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   12. MAIN APP
   ═══════════════════════════════════════════════════════════════ */

export default function App() {
  const [trip, setTrip] = useState(() => {
    try {
      const saved = localStorage.getItem(LS_DATA);
      return saved ? JSON.parse(saved) : seedTrip();
    } catch { return seedTrip(); }
  });
  const [apiUrl, setApiUrl] = useState(() => localStorage.getItem(LS_API) || "");
  const [sync, setSync] = useState({ status: "idle", at: null, error: null });
  const [tab, setTab] = useState("dashboard");
  const [modal, setModal] = useState(null);
  const [slipFor, setSlipFor] = useState(null);

  const fund = useMemo(() => computeFund(trip), [trip]);
  const balances = useMemo(() => computeBalances(trip), [trip]);
  const settlements = useMemo(() => simplify(balances), [balances]);

  useEffect(() => { try { localStorage.setItem(LS_DATA, JSON.stringify(trip)); } catch {} }, [trip]);
  useEffect(() => {
    if (apiUrl) localStorage.setItem(LS_API, apiUrl);
    else localStorage.removeItem(LS_API);
  }, [apiUrl]);

  const refresh = useCallback(async () => {
    if (!apiUrl) return;
    setSync((s) => ({ ...s, status: "syncing" }));
    try {
      const j = await apiGet(apiUrl);
      setTrip(j.trip);
      setSync({ status: "idle", at: Date.now(), error: null });
    } catch (err) {
      setSync({ status: "error", at: null, error: err.message });
    }
  }, [apiUrl]);

  const lastUrl = useRef("");
  useEffect(() => { if (apiUrl && apiUrl !== lastUrl.current) { lastUrl.current = apiUrl; refresh(); } }, [apiUrl, refresh]);
  useEffect(() => {
    const onVis = () => { if (!document.hidden && apiUrl) refresh(); };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [apiUrl, refresh]);

  const mutate = async (action, payload, optimisticTrip) => {
    setTrip(optimisticTrip);
    if (!apiUrl) return;
    setSync((s) => ({ ...s, status: "syncing" }));
    try {
      const j = await apiPost(apiUrl, action, payload);
      setTrip(j.trip);
      setSync({ status: "idle", at: Date.now(), error: null });
    } catch (err) {
      setSync({ status: "error", at: null, error: err.message });
    }
  };

  const addExpense = (e) => mutate("addExpense", { expense: e }, { ...trip, expenses: [...trip.expenses, e] });
  const delExpense = (id) => mutate("deleteExpense", { id }, { ...trip, expenses: trip.expenses.filter((x) => x.id !== id) });
  const addTopup = (t) => mutate("addTopup", { topup: t }, { ...trip, topups: [...trip.topups, t] });
  const addMember = (m) => mutate("addMember", { member: m }, { ...trip, members: [...trip.members, m] });
  const resetData = () => { setTrip(seedTrip()); setSync({ status: "idle", at: null, error: null }); };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md min-h-screen relative">
        {/* Header */}
        <div className="safe-top px-5 pb-3 sticky top-0 z-30 bg-cream-100/80 glass border-b border-cream-200/50">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className="animate-float"><WalletLogo size={32} /></div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-navy text-lg leading-none">TripSplit</span>
                  <SyncBar apiUrl={apiUrl} sync={sync} onRefresh={refresh} onOpenSettings={() => setModal("settings")} />
                </div>
                <div className="text-[11px] text-ink2 truncate">{trip.emoji} {trip.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button onClick={() => setModal("settings")} className="w-10 h-10 rounded-2xl flex items-center justify-center bg-cream-50 border border-cream-200 active:scale-95">
                <Settings size={17} className="text-navy" />
              </button>
              <button onClick={() => setModal("member")} className="w-10 h-10 rounded-2xl flex items-center justify-center bg-cream-50 border border-cream-200 active:scale-95">
                <UserPlus size={17} className="text-navy" />
              </button>
            </div>
          </div>
        </div>

        {/* Sync error */}
        {sync.error && (
          <div className="mx-5 mt-3 p-3 rounded-2xl bg-coral/10 border border-coral/30 text-coral-600 text-xs flex items-start gap-2">
            <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-bold">Sync error</div>
              <div className="opacity-90 break-words">{sync.error}</div>
            </div>
            <button onClick={refresh} className="font-bold underline">retry</button>
          </div>
        )}

        {/* Body */}
        {tab === "dashboard" && <Dashboard trip={trip} fund={fund} balances={balances} onAddExpense={() => setModal("expense")} onTopUp={() => setModal("topup")} />}
        {tab === "expenses" && <ExpensesTab trip={trip} onDelete={delExpense} onAdd={() => setModal("expense")} />}
        {tab === "fund" && <FundTab trip={trip} fund={fund} onTopUp={() => setModal("topup")} />}
        {tab === "settle" && <SettleTab trip={trip} balances={balances} settlements={settlements} onShowSlip={(m) => setSlipFor(m)} />}

        {/* Bottom nav — full-width navy bar with stamp orange active state */}
        <div className="fixed bottom-0 left-0 right-0 flex justify-center pointer-events-none">
          <div className="w-full max-w-md pointer-events-auto safe-bottom">
            <div className="rounded-t-[28px] flex items-stretch justify-around shadow-nav" style={{ background: "linear-gradient(180deg,#1B3A5C 0%,#16304D 100%)" }}>
              {[
                { id: "dashboard", icon: Home, label: "Dashboard" },
                { id: "expenses", icon: Receipt, label: "Expenses" },
                { id: "fund", icon: Wallet, label: "Fund" },
                { id: "settle", icon: Users, label: "Trip" },
              ].map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (
                  <button key={t.id} onClick={() => setTab(t.id)}
                    className="flex-1 flex flex-col items-center gap-1 py-3 transition-all">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${active ? "bg-coral text-cream-50 shadow-coral" : "text-cream-100/70"}`}>
                      <Icon size={18} />
                    </div>
                    <span className={`text-[10px] font-bold ${active ? "text-coral" : "text-cream-100/70"}`}>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modals */}
        <Modal open={modal === "expense"} onClose={() => setModal(null)} title="บันทึกรายจ่าย">
          <ExpenseForm trip={trip} onSave={addExpense} onClose={() => setModal(null)} />
        </Modal>
        <Modal open={modal === "topup"} onClose={() => setModal(null)} title="เติมงบกลาง">
          <TopUpForm trip={trip} onSave={addTopup} onClose={() => setModal(null)} />
        </Modal>
        <Modal open={modal === "member"} onClose={() => setModal(null)} title="เพิ่มสมาชิก">
          <MemberForm onSave={addMember} onClose={() => setModal(null)} />
        </Modal>
        <Modal open={modal === "settings"} onClose={() => setModal(null)} title="ตั้งค่า · Cloud Sync">
          <SettingsForm apiUrl={apiUrl} onSave={setApiUrl} onClose={() => setModal(null)} onReset={resetData} />
        </Modal>
        <Modal open={!!slipFor} onClose={() => setSlipFor(null)} title="สลิปส่วนตัว">
          {slipFor && <SlipView trip={trip} member={slipFor} balance={balances[slipFor.id] || 0} settlements={settlements} />}
        </Modal>
      </div>
    </div>
  );
}
