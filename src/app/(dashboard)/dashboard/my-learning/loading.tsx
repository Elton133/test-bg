import { Skeleton } from '@/components/ui/skeleton';

export default function MyLearningLoading() {
  return (
    <section className="py-6 px-4 lg:px-8 w-full min-h-[calc(100vh_-_50px)]">
      <div className="v-stack gap-2">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-5 w-48" />
      </div>
      <div className="pt-6 pb-4">
        <div className="border-b flex gap-4 pb-4">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="py-4 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:flex-row sm:justify-center lg:justify-start gap-y-4 sm:gap-x-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="w-full aspect-video rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-2 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
