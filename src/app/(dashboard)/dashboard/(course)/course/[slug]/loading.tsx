import { Skeleton } from '@/components/ui/skeleton';

export default function CourseDetailLoading() {
  return (
    <section className="w-full h-full">
      <Skeleton className="min-h-[180px] md:min-h-[380px] w-full" />
      <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-16 min-h-full">
        {/* Course Detail Header */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-8 w-72" />
            <Skeleton className="h-4 w-96" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
            <Skeleton className="h-24" />
          </div>
        </div>

        <div className="py-6">
          <Skeleton className="h-7 w-24" />
        </div>

        {/* Topics */}
        <div className="v-stack gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-72" />
                  </div>
                  <Skeleton className="h-8 w-24" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-8" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
