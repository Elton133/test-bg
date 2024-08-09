import SettingsNavigationPane from "@components/settings/settings-navigation-pane";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={
        "h-full w-full px-4 md:px-16 py-4 md:py-16"
      }
    >
      <h1 className={"text-2xl font-semibold"}>Account</h1>
      <div className={"grid md:grid-cols-5 py-6 h-full"}>
        <div className={"md:col-span-2 xl:col-span-1 h-full"}>
          <SettingsNavigationPane />
        </div>
        <div
          className={
            "md:col-span-3 xl:col-span-4 md:px-6 h-full"
          }
        >
          {children}
        </div>
      </div>
    </main>
  );
}
