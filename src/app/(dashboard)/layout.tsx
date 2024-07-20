import SideBar from "@components/core/side-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"h-full relative"}>
      <div className={"sm:ml-[110px]"}>
        <SideBar />
        {children}
      </div>
    </main>
  );
}
