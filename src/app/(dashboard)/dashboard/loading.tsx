import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardLoading() {
  return (
    <main className="h-full v-stack gap-6 pb-8 lg:px-8 lg:py-6">
      {/* Hero Section */}
      <div className="max-w-screen-[1440px] mx-auto w-full 2xl:w-[75%] lg:h-[220px] relative lg:rounded-[20px]">
        <Skeleton className="w-full h-full" />
      </div>

      <div className="lg:px-4 v-stack gap-6">
        {/* Announcement Section */}
        <div className="px-4">
          <Skeleton className="w-full h-[100px]" />
        </div>

        {/* Overview Section */}
        <div className="px-4">
          <div className="grid gap-4">
            <Skeleton className="h-[40px] w-[200px]" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-[120px]" />
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        <div>
          <Skeleton className="w-full h-[200px]" />
        </div>

        {/* Support Section */}
        <div className="px-4 mx-auto">
          <Skeleton className="w-full h-[100px]" />
        </div>
      </div>
    </main>
  );
}
