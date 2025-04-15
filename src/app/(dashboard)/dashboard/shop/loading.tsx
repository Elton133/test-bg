import { Skeleton } from '@/components/ui/skeleton';

export default function ShopLoading() {
  return (
    <div className="h-full">
      <section className="bg-primary w-full min-[710px] min--[calc(100vh_-_56px)] md:min-h-[360px] pt-8 px-4 md:px-12 md:py-12 pb-2">
        <div className="flex flex-col md:flex-row h-full gap-12 sm:gap-2 2xl:px-24 justify-between">
          <div className="flex flex-col gap-6 md:gap-y-12">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-12 w-48 bg-brand-yellow-primary/20" />
              <Skeleton className="h-6 w-96 bg-brand-yellow-accent/20" />
            </div>
            <div className="flex flex-col gap-4">
              <Skeleton className="h-6 w-32 bg-brand-yellow-primary/20" />
              <div className="grid grid-cols-3 lg:grid-flow-col gap-y-4 gap-x-[56px] justify-between">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-20 bg-[#B2BFBF]/20" />
                    <Skeleton className="h-6 w-24 bg-white/20" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto flex md:flex-col justify-center md:items-end w-full lg:w-1/2">
            <Skeleton className="max-w-[180px] max-h-[180px] w-full h-full md:max-w-[220px] md:max-h-[220px] lg:max-w-[290px] lg:max-h-[290px]" />
          </div>
        </div>
      </section>
      <section className="w-full grid grid-col-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-4 md:px-8 py-8">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <Skeleton className="w-full aspect-video" />
            <Skeleton className="h-6 w-3/4" />
            <div className="flex gap-2">
              <Skeleton className="h-9 w-24" />
              <Skeleton className="h-9 w-24" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
