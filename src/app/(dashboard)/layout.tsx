import SideBar from "@components/core/side-nav";
import { SidePanelProvider } from "@/context/note-side-panel-context";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidePanelProvider>
      <main className={"w-full flex h-full"}>
        <SideBar />
        <div className={"min-h-full h-full w-full v-stack"}>{children}</div>
      </main>
    </SidePanelProvider>
  );
}
