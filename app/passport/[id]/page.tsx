import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  ShieldX,
  CheckCircle,
  Circle,
  MapPin,
} from "lucide-react";
import { getProductById } from "@/lib/firebase";
import PassportQR from "@/components/PassportQR";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PassportPage({ params }: Props) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) notFound();

  return (
    <main className="max-w-5xl mx-auto min-h-screen p-6 flex flex-col gap-8 bg-zinc-950 text-zinc-100">

      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-zinc-500 hover:text-amber-400 transition-colors tracking-wider uppercase"
        >
          <ArrowLeft size={14} /> Search
        </Link>
        <span className="text-xs tracking-widest text-amber-500 uppercase">
          Digital Product Passport
        </span>
        <span className="text-xs font-mono text-zinc-600">{product.sku}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        <div className="flex flex-col gap-6">

          <div className={`flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-3 py-2 rounded-sm w-fit border ${
            product.authentic
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
              : "bg-red-500/10 border-red-500/30 text-red-400"
          }`}>
            {product.authentic ? <ShieldCheck size={14} /> : <ShieldX size={14} />}
            {product.authentic ? "Authentic" : "Unverified"}
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-light tracking-tight">{product.productName}</h1>
            <p className="text-sm text-amber-500 tracking-widest uppercase">{product.brand}</p>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed border-l-2 border-zinc-700 pl-4 italic">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 bg-zinc-900 border border-zinc-800 rounded p-4 text-xs font-mono">
            {[
              ["Category",     product.category],
              ["Origin",       product.origin],
              ["Manufactured", product.manufacturedAt],
            ].map(([label, value]) => (
              <div key={label} className="contents">
                <span className="text-zinc-600 uppercase tracking-wider">{label}</span>
                <span className="text-zinc-200">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-2">
              Materials
            </p>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((m) => (
                <span key={m} className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-1 rounded-sm">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xs text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-2">
              Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((c) => (
                <span key={c} className="text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-1 rounded-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-6">

          <p className="text-xs text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-3">
            Supply Chain · {product.supplyChain.length} Hops
          </p>

          <div className="flex flex-col">
            {product.supplyChain.map((hop, i) => (
              <div key={i} className="flex gap-4">

                <div className="flex flex-col items-center">
                  {hop.verified
                    ? <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    : <Circle     size={16} className="text-zinc-600 shrink-0 mt-0.5" />
                  }
                  {i < product.supplyChain.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-800 my-1 min-h-6" />
                  )}
                </div>

                <div className="pb-6 flex flex-col gap-1 flex-1">
                  <p className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-200">
                    {hop.stage}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-amber-400">
                    <MapPin size={11} /> {hop.location}
                  </p>
                  <p className="text-xs text-zinc-500">{hop.handler}</p>
                  {hop.notes && (
                    <p className="text-xs text-zinc-600 italic mt-1">{hop.notes}</p>
                  )}
                  <p className="text-xs text-zinc-700 mt-1 font-mono">
                    {new Date(hop.timestamp).toLocaleDateString("en-GB", {
                      day: "2-digit", month: "short", year: "numeric",
                    })}
                  </p>
                </div>

              </div>
            ))}
          </div>
          <PassportQR productId={product.id} />
        </div>
        
      </div>

      <p className="text-xs text-zinc-700 tracking-widest uppercase text-center border-t border-zinc-800 pt-4">
        Passport ID · {product.id} · Lumenar Digital Product Passport v1.0
      </p>

    </main>
  );
}