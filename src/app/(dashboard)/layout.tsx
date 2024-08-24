import SideBar from "@components/core/side-nav";
import { SidePanelProvider } from "@/context/note-side-panel-context";
import { SideBarProvider } from "@/context/side-bar-context";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidePanelProvider>
      <SideBarProvider>
          <main className={"w-full flex h-full"}>
            <SideBar />
            <div className={"min-h-full h-full w-full v-stack"}>{children}</div>
          </main>
      </SideBarProvider>
    </SidePanelProvider>
  );
}
