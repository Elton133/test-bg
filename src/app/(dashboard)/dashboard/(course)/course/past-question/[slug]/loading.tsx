import { Skeleton } from '@/components/ui/skeleton';

export default function PastQuestionLoading() {
  return (
    <section className="w-full">
      {/* Note Header */}
      <div className="bg-white border-b">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </div>

      {/* Past Questions Content */}
      <div className="p-4 max-w-[1100px] mx-auto">
        <div className="bg-white min-h-[600px] rounded-[20px] p-8 space-y-8">
          {/* Question Sections */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-6">
              <div className="space-y-2">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              {/* Sub-questions */}
              <div className="space-y-4 pl-6">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
