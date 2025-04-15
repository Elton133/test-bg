import { Skeleton } from '@/components/ui/skeleton';

export default function QuizLoading() {
  return (
    <section className="w-full relative">
      <div className="py-1">
        <div className="max-w-4xl mx-auto px-4">
          {/* Quiz Header */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex justify-between items-center">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-8 w-24" />
            </div>
            <Skeleton className="h-4 w-full max-w-lg" />
          </div>

          {/* Quiz Content */}
          <div className="space-y-8">
            {/* Question */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Options */}
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-12 w-full rounded-lg" />
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8">
              <Skeleton className="h-10 w-24" />
              <div className="flex gap-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
