import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
  {
    id: "TI-WATCH-2024-002",
    data: {
      productName: "Titan Edge Heritage",
      brand: "Titan",
      category: "Luxury Watches",
      sku: "TI-WATCH-2024-002",
      origin: "Bengaluru, India",
      manufacturedAt: "2024-10-15",
      description:
        "Ultra-slim premium watch crafted with precision engineering in India.",
      materials: ["Stainless Steel", "Sapphire Glass", "Leather Strap"],
      certifications: ["ISO Certified", "Made in India"],
      authentic: true,
      supplyChain: [
        {
          stage: "Raw Material",
          location: "Jamshedpur, India",
          timestamp: "2024-08-20T07:00:00Z",
          handler: "Tata Steel",
          verified: true,
          notes: "High-grade stainless steel sourced.",
        },
        {
          stage: "Component Manufacturing",
          location: "Bengaluru, India",
          timestamp: "2024-09-10T10:00:00Z",
          handler: "Titan Components Unit",
          verified: true,
        },
        {
          stage: "Assembly",
          location: "Hosur, India",
          timestamp: "2024-10-01T09:00:00Z",
          handler: "Titan Assembly Plant",
          verified: true,
        },
        {
          stage: "Quality Inspection",
          location: "Hosur, India",
          timestamp: "2024-10-10T12:00:00Z",
          handler: "Titan QA Team",
          verified: true,
        },
        {
          stage: "Retail",
          location: "Delhi, India",
          timestamp: "2024-10-20T11:00:00Z",
          handler: "Titan Showroom",
          verified: true,
        },
      ],
    },
  },

  {
    id: "NI-SNK-2024-003",
    data: {
      productName: "Campus AirFlex Pro",
      brand: "Campus",
      category: "Footwear",
      sku: "NI-SNK-2024-003",
      origin: "Agra, India",
      manufacturedAt: "2024-09-25",
      description:
        "Lightweight performance sneakers designed for everyday comfort.",
      materials: ["Mesh Fabric", "Rubber Sole", "Foam Cushioning"],
      certifications: ["ISO 9001", "Eco-Friendly Materials"],
      authentic: true,
      supplyChain: [
        {
          stage: "Raw Material",
          location: "Kanpur, India",
          timestamp: "2024-08-01T08:00:00Z",
          handler: "Kanpur Leather Works",
          verified: true,
        },
        {
          stage: "Fabric Processing",
          location: "Surat, India",
          timestamp: "2024-08-15T09:30:00Z",
          handler: "Surat Textile Hub",
          verified: true,
        },
        {
          stage: "Manufacturing",
          location: "Agra, India",
          timestamp: "2024-09-01T10:00:00Z",
          handler: "Campus Factory",
          verified: true,
        },
        {
          stage: "Packaging",
          location: "Agra, India",
          timestamp: "2024-09-15T11:00:00Z",
          handler: "Campus Packaging Unit",
          verified: true,
        },
        {
          stage: "Retail",
          location: "Mumbai, India",
          timestamp: "2024-09-30T12:00:00Z",
          handler: "Campus Store",
          verified: true,
        },
      ],
    },
  },
];

async function seed() {
  console.log("Seeding Firestore...");

  for (const product of products) {
    await setDoc(doc(db, "products", product.id), product.data);
    console.log(`Written: ${product.id}`);
  }

  console.log("Done! Try these IDs in the app:");
  products.forEach((p) => console.log(`   → ${p.id}`));
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});