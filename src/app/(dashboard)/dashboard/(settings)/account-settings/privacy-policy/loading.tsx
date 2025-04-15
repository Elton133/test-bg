import { Skeleton } from '@/components/ui/skeleton';

export default function PrivacyPolicyLoading() {
  return (
    <main className="md:pb-8 max-h-[80vh] overflow-y-scroll no-scrollbar mx-auto">
      <section className="max-w-7xl w-full mx-auto v-stack gap-12">
        {/* Header section */}
        <div className="v-stack gap-6 px-2">
          <div className="font-bold v-stack my-6">
            <Skeleton className="h-8 w-48" />
          </div>
          <div className="px-2 md:px-4 v-stack text-sm space-y-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-20 w-full" />
            ))}
          </div>
        </div>

        {/* Content Sections */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="v-stack gap-6 px-2">
            <Skeleton className="h-7 w-64" />
            <div className="px-2 md:px-4 v-stack gap-4 text-sm">
              <div className="space-y-4">
                {[...Array(3)].map((_, j) => (
                  <Skeleton key={j} className="h-16 w-full" />
                ))}
              </div>

              {/* Optional subsection */}
              {i % 2 === 0 && (
                <div className="pl-8 space-y-3 mt-4">
                  {[...Array(3)].map((_, k) => (
                    <div key={k} className="space-y-2">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
