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
          className={
            "max-w-screen-2xl w-full v-stack mx-auto lg:px- lg:py-4"
          }
        >
          {children}
        </div>
      </div>
    </main>
  );
}
