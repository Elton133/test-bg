import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import NavBar from '@components/core/navbar';
import SessionWrapper from '@/providers/session-wrapper';
import { InfoCircle } from 'iconsax-react';
import { CircleCheck } from 'lucide-react';
import { CartProvider } from '@/context/cart-context';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'The Best Study Guide',
  description:
    'We provide law students with a centralized platform, streamlining access to key resources for efficient bar exam preparation',
  keywords: [
    'the best study guide',
    'the best study guide for law students',
    'study guide for law students',
    'ghana bar exam',
    'best study guide',
    'thebeststudyguide',
    'bsg law',
    'law',
    'bar exam',
    'study',
    'guide',
    'lawyers',
    'students',
    'legal',
    'resources',
  ],
  authors: [
    {
      name: 'The Best Study Guide',
      url: 'https://thebeststudyguide.com',
    },
    {
      name: 'TouchStack Technologies',
      url: 'https://touchstacktechnologies.com',
    },
  ],
  robots: 'follow, index',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${poppins.className} min-h-screen h-full relative antialiased scroll-smooth bg-gray-50`}
      >
        <SessionWrapper>
          <CartProvider>
            <NavBar session={session} />
            {children}
          </CartProvider>
          <Toaster
            toastOptions={{
              unstyled: true,
              classNames: {
                toast:
                  'bg-[#D0EFE9] relative flex items-center gap-4 px-4 py-4 pr-1 shadow-md border-l-4 border-primary',
                closeButton:
                  'text-[#063231] absolute top-1/2 right-[20px] hover:text-[#FF170A] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
              },
            }}
            icons={{
              error: <InfoCircle color={'red'} size={16} />,
              success: (
                <CircleCheck
                  fill={'#063231'}
                  color={'#D0EFE9'}
                  size={24}
                />
              ),
            }}
            // closeButton
            position={'top-center'}
          />
        </SessionWrapper>
      </body>
    </html>
  );
}
