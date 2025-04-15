import { Skeleton } from '@/components/ui/skeleton';

export default function AccountLoading() {
  return (
    <section className="py-6 lg:px-8">
      <div className="v-stack px-4">
        <Skeleton className="h-8 w-32" />
      </div>
      <div className="max-w-3xl w-full mx-auto my-10">
        <div className="flex flex-col items-start sm:flex-row sm:justify-between gap-3 pb-4 px-4">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-9 w-24" />
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center py-4 gap-3">
            <Skeleton className="w-[120px] h-[120px] rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>
          <hr />
          <div className="flex items-start w-full justify-around py-4 text-center px-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
          <hr />
          <div className="py-3">
            <div className="px-4">
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-72" />
            </div>
            <div className="flex justify-start items-center gap-x-6 py-4 px-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="w-[70px] h-[70px]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
