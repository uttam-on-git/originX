"use client";

import QRCode from "react-qr-code";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Props {
  productId: string;
}

export default function PassportQR({ productId }: Props) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== "undefined"
    ? `${window.location.origin}/passport/${productId}`
    : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4 items-center bg-zinc-900 border border-zinc-800 rounded-lg p-6">

      <p className="text-xs text-zinc-600 uppercase tracking-widest self-start border-b border-zinc-800 pb-3 w-full">
        Scan to Verify
      </p>

      {/* QR Code */}
      <div className="bg-white p-3 rounded-md">
        <QRCode
          value={url || `passport/${productId}`}
          size={160}
          fgColor="#09090b"
        />
      </div>

      <div className="flex items-center gap-2 w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2">
        <p className="text-xs font-mono text-zinc-500 truncate flex-1">
          {url || `.../${productId}`}
        </p>
        <button
          onClick={handleCopy}
          className="shrink-0 text-zinc-500 hover:text-amber-400 transition-colors"
          title="Copy link"
        >
          {copied
            ? <Check size={14} className="text-emerald-400" />
            : <Copy size={14} />
          }
        </button>
      </div>

      {copied && (
        <p className="text-xs text-emerald-400 tracking-wider">
          Link copied!
        </p>
      )}

    </div>
  );
}