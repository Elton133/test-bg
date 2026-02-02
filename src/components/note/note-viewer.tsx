import dynamic from 'next/dynamic';
import { ITopic } from '@/types/course';

const PdfViewerClient = dynamic(() => import('./pdf-viewer-client'), {
  ssr: false,
});

interface INoteViewerProps {
  note: ITopic;
  noteStatus?: boolean;
}

export default function NoteViewer({ note, noteStatus }: INoteViewerProps) {
  return <PdfViewerClient note={note} noteStatus={noteStatus} />;
}
