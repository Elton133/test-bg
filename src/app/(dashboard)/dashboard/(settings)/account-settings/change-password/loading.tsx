import { Skeleton } from '@/components/ui/skeleton';

export default function ChangePasswordLoading() {
  return (
    <section className="w-full min-h-full">
      <div className="max-w-md w-full mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-5 w-72" />
        </div>

        {/* Password Form */}
        <div className="space-y-4">
          {/* Current Password */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Submit Button */}
          <Skeleton className="h-10 w-full mt-6" />
        </div>
      </div>
    </section>
  );
}
