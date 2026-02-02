export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"w-full"}>
      <div className={""}>{children}</div>
    </main>
  );
}
