export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={'flex place-items-center place-content-center'}>
            {children}
        </main>
    );
}