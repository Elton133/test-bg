import { Skeleton } from '@/components/ui/skeleton';

export default function SupportLoading() {
  return (
    <section className="py-12 px-4 lg:px-8 w-full min-h-[calc(100vh_-_50px)]">
      <Skeleton className="h-8 w-40" />
      <div className="max-w-2xl w-full flex flex-col items-start mx-auto py-12 gap-6">
        <div className="w-full flex justify-between items-center">
          <Skeleton className="h-5 w-48" />
          <Skeleton className="h-9 w-32" />
        </div>
        <div className="flex w-full justify-between items-center gap-12 text-[#ABB3BF]">
          <hr className="border-[#ABB3BF] w-full my-4" />
          <Skeleton className="h-4 w-6" />
          <hr className="border-[#ABB3BF] w-full my-4" />
        </div>
        <div>
          <Skeleton className="h-5 w-96" />
        </div>
        <div className="w-full space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
