# originX - Digital Product Passport

> Scan a product ID or QR code to instantly verify authenticity and trace its full supply chain journey from raw material to retail.

Built as a concept demo aligned with [Lumenar](https://lumenar.in)'s mission of bringing transparency and trust to supply chains using Web3 and AI.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?style=flat-square&logo=firebase)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

**[Live Demo →](https://origin-x-nine.vercel.app/)**

---

## What it does

- Look up any product by SKU or Product ID
- Instant **authenticity badge** - verified or unverified
- Full **supply chain timeline** - every hop from origin to retail, with location, handler, date, and verification status
- **QR code** per passport - scan to verify on any device
- One-click **copy passport link** to share

---

## Demo Products

| Product ID | Item |
|---|---|
| `TI-WATCH-2024-002` | Titan Edge Heritage - Titan |
| `NI-SNK-2024-003` | Campus AirFlex Pro - Campus |
| `ME-TOTE-2024-001` | Aria Leather Tote - Maison Elara |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Database | Firebase Firestore |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| QR Code | react-qr-code |
| Deploy | Vercel |

---

## Architecture Decisions

- **Server Components** for the passport detail page - Firestore fetch runs on the server, nothing exposed to the browser
- **Client Components** only where interactivity is needed (search form, QR code, copy button)
- **`loading.tsx`** convention for automatic skeleton loading state via React Suspense
- **TypeScript interfaces** designed before any UI - `ProductPassport` and `SupplyChainHop` model the domain accurately
- **Seed script** with separate `tsconfig.seed.json` so Node.js and Next.js configs don't conflict

---

## Local Setup
```bash
git clone https://github.com/uttam-on-git/originX
cd originX
npm install
```

Copy env file and fill in your Firebase values:
```bash
cp .env.local.example .env.local
```

Seed the database:
```bash
npm run seed
```

Run locally:
```bash
npm run dev
```

---

## Roadmap

- [ ] QR code scanning via device camera
- [ ] On-chain verification via smart contract hash
- [ ] Admin dashboard to issue and manage passports
- [ ] AI anomaly detection on supply chain hops
- [ ] React Native mobile app

---

*Concept demo - built to understand and contribute to what Lumenar is building.*
