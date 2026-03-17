"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShieldCheck, GitBranch, Cpu } from "lucide-react";

const DEMO_IDS = ["TI-WATCH-2024-002", "NI-SNK-2024-003"];

const FEATURES = [
  {
    icon: ShieldCheck,
    label: "On-chain Verified",
    desc: "Each hop cryptographically signed",
  },
  {
    icon: GitBranch,
    label: "Real-time Tracing",
    desc: "Live supply chain visibility",
  },
  {
    icon: Cpu,
    label: "AI-Powered Audit",
    desc: "Anomaly detection at every stage",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = query.trim().toUpperCase();
    if (id) router.push(`/passport/${id}`);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 gap-10">

      {/* Hero */}
      <div className="flex flex-col items-center gap-3 text-center max-w-lg">
        <span className="text-xs tracking-widest text-amber-500 uppercase border border-amber-500/20 bg-amber-500/10 px-3 py-1 rounded-sm">
          Web3 + AI Powered
        </span>
        <h1 className="text-5xl font-light tracking-tight">
          Product{" "}
          <span className="text-amber-400 italic">Passport</span>
        </h1>
        <p className="text-sm text-zinc-500 tracking-wide uppercase">
          Verify authenticity · Trace origins · Trust the chain
        </p>
      </div>

      {/* Search form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
          <Search className="ml-4 text-amber-500 shrink-0" size={16} />
          <input
            type="text"
            placeholder="Enter Product ID or SKU..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent outline-none text-sm text-zinc-100 placeholder-zinc-600 px-3 py-3 font-mono tracking-wide"
          />
          <button
            type="submit"
            disabled={!query.trim()}
            className="bg-amber-500 text-zinc-950 text-xs font-medium tracking-widest uppercase px-5 py-3 rounded-r hover:bg-amber-400 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
          >
            Verify →
          </button>
        </div>
      </form>

      {/* Demo */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-xs text-zinc-600 uppercase tracking-wider">
          Try a demo:
        </span>
        {DEMO_IDS.map((id) => (
          <button
            key={id}
            onClick={() => router.push(`/passport/${id}`)}
            className="text-xs font-mono text-zinc-400 border border-zinc-800 bg-zinc-900 px-3 py-1 rounded-sm hover:border-amber-500 hover:text-amber-400 transition-colors"
          >
            {id}
          </button>
        ))}
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden w-full max-w-lg">
        {FEATURES.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="bg-zinc-950 p-5 flex flex-col gap-2">
            <Icon size={18} className="text-amber-500" />
            <strong className="text-xs tracking-widest uppercase text-zinc-200">
              {label}
            </strong>
            <p className="text-xs text-zinc-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-xs text-zinc-700 tracking-widest uppercase">
        Built with Next.js · TypeScript · Firebase
      </p>

    </main>
  );
}