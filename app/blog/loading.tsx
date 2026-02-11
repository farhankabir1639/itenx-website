export default function BlogLoading() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Page header skeleton */}
        <div className="py-16 text-center sm:py-24">
          <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-white/10" />
          <div className="mx-auto mt-6 h-6 max-w-xl animate-pulse rounded-lg bg-white/5" />
        </div>

        {/* Grid skeleton */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="aspect-[16/10] animate-pulse bg-white/5" />
              <div className="space-y-4 p-6">
                <div className="flex gap-2">
                  <div className="h-6 w-20 animate-pulse rounded-full bg-white/5" />
                  <div className="h-6 w-16 animate-pulse rounded-full bg-white/5" />
                </div>
                <div className="h-6 w-full animate-pulse rounded bg-white/5" />
                <div className="h-4 w-3/4 animate-pulse rounded bg-white/5" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-white/5" />
                <div className="h-4 w-24 animate-pulse rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
