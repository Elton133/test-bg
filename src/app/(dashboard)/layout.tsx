import SideBar from "@components/core/side-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className={"min-h-full w-full flex lg:gap- bg-gray-50"}>
        <SideBar />
        <div className={"bg-gray-50 w-full"}>
          <div
            className={"max-w-screen-2 w-full v-stack 2xlmx-auto lg:px- lg:py-"}
          >
            {children}
          </div>
        </div>
      </main>
  );
}
