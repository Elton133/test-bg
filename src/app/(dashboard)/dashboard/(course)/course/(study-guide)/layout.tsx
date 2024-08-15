'use client'
import { Worker } from "@react-pdf-viewer/core";
export default function NoteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <main className={"w-full"}>
        <div className={""}>{children}</div>
      </main>
    </Worker>
  );
}
