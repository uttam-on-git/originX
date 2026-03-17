import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center gap-5 p-6 text-center">
      <SearchX size={40} className="text-amber-500" />
      <h1 className="text-3xl font-light">Passport Not Found</h1>
      <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
        No product passport exists for this ID. Check the SKU or use a demo ID.
      </p>
      <Link
        href="/"
        className="text-xs bg-amber-500 text-zinc-950 font-medium tracking-widest uppercase px-6 py-3 rounded hover:bg-amber-400 transition-colors"
      >
        ← Back to Search
      </Link>
    </main>
  );
}