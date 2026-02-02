import dynamic from 'next/dynamic';

const PdfViewerClient = dynamic(() => import('./pdf-viewer-client'), {
  ssr: false,
});

export default function NoteViewer({ fileUrl }: { fileUrl: string }) {
  return <PdfViewerClient fileUrl={fileUrl} />;
}
