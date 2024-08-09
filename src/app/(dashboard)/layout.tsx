import SideBar from "@components/core/side-nav";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"w-full flex h-full"}>
      <SideBar />
      <div className={"min-h-full h-full w-full v-stack"}>{children}</div>
    </main>
  );
}
