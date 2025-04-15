import { Skeleton } from '@/components/ui/skeleton';

export default function AccountSettingsLoading() {
  return (
    <section className="hidden md:v-stack gap-6">
      <div className="v-stack gap-3">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-5 w-64" />
      </div>

      {/* Profile Form */}
      <div className="space-y-6">
        {/* Profile Image */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <Skeleton className="h-9 w-24" />
        </div>

        {/* Form Fields */}
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          <div className="space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>

          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      <hr className="border-[#E4E6E8] w-full" />

      {/* Close Account Section */}
      <div className="v-stack gap-3 text-sm items-start py-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-96" />
        <div className="py-3">
          <Skeleton className="h-9 w-32" />
        </div>
      </div>
    </section>
  );
}
