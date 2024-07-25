import SideBar from "@components/core/side-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"min-h-full w-full flex lg:gap-6 bg-gray-50"}>
      <SideBar />
      <div className={"bg-gray-50 w-full"}>
        <div
          className={
            "max-w-screen-2xl w-full v-stack mx-auto lg:px-6 lg:py-4"
          }
        >
          {children}
        </div>
      </div>
    </main>
  );
}
