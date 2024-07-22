export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"flex place-items-start place-content-center h-full"}>
      {children}
    </main>
  );
}
