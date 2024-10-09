import { StreakProvider } from '@/context/streak-context';

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StreakProvider>
      <main className={'w-full'}>
        <div className={''}>{children}</div>
      </main>
    </StreakProvider>
  );
}
