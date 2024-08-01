import SideBar from "@components/core/side-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className={"h-full w-full flex lg:gap- bg-gray-50"}>
        <SideBar />
        <div className={"bg-gray-50 h-full w-full"}>
          <div
            className={"max-w-screen-2 h-full w-full v-stack 2xlmx-auto lg:px- lg:py-"}
          >
            {children}
          </div>
        </div>
      </main>
  );
}
