import SideBar from "@components/core/side-nav";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"h-full w-full flex lg:gap- bg-gray-50"}>
      <SideBar />
      <div className={"h-full w-full"}>
        <div className={"h-full w-full v-stack"}>{children}</div>
      </div>
    </main>
  );
}
