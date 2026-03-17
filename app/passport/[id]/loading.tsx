export default function PassportLoading() {
  return (
    <main className="max-w-5xl mx-auto min-h-screen p-6 flex flex-col gap-8 bg-zinc-950 text-zinc-100">

      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="h-3 w-16 bg-zinc-800 rounded animate-pulse" />
        <div className="h-3 w-40 bg-zinc-800 rounded animate-pulse" />
        <div className="h-3 w-24 bg-zinc-800 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        <div className="flex flex-col gap-6">

          <div className="h-7 w-28 bg-zinc-800 rounded-sm animate-pulse" />

          <div className="flex flex-col gap-2">
            <div className="h-9 w-3/4 bg-zinc-800 rounded animate-pulse" />
            <div className="h-9 w-1/2 bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 w-32 bg-zinc-800 rounded animate-pulse mt-1" />
          </div>

          <div className="border-l-2 border-zinc-800 pl-4 flex flex-col gap-2">
            <div className="h-3 w-full bg-zinc-800 rounded animate-pulse" />
            <div className="h-3 w-full bg-zinc-800 rounded animate-pulse" />
            <div className="h-3 w-2/3 bg-zinc-800 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 bg-zinc-900 border border-zinc-800 rounded p-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-3 bg-zinc-800 rounded animate-pulse" />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-3 w-20 bg-zinc-800 rounded animate-pulse" />
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-6 w-24 bg-zinc-800 rounded-sm animate-pulse" />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="h-3 w-28 bg-zinc-800 rounded animate-pulse" />
            <div className="flex gap-2 flex-wrap">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="h-6 w-36 bg-zinc-800 rounded-sm animate-pulse" />
              ))}
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-4 bg-zinc-900 border border-zinc-800 rounded-lg p-6">

            <div className="h-3 w-36 bg-zinc-800 rounded animate-pulse border-b border-zinc-800 pb-3" />

            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-4">

                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-zinc-800 animate-pulse shrink-0" />
                  {i < 3 && (
                    <div className="w-px flex-1 min-h-10 bg-zinc-800 my-1" />
                  )}
                </div>

                <div className="flex flex-col gap-2 flex-1 pb-6">
                  <div className="h-3 w-2/3 bg-zinc-800 rounded animate-pulse" />
                  <div className="h-3 w-1/2 bg-zinc-800 rounded animate-pulse" />
                  <div className="h-3 w-1/3 bg-zinc-800 rounded animate-pulse" />
                </div>

              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 items-center bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <div className="h-3 w-24 bg-zinc-800 rounded animate-pulse self-start" />
            <div className="w-46 h-46 bg-zinc-800 rounded-md animate-pulse" />
            <div className="h-8 w-full bg-zinc-800 rounded animate-pulse" />
          </div>

        </div>
      </div>

      <div className="h-3 w-64 bg-zinc-800 rounded animate-pulse mx-auto" />

    </main>
  );
}