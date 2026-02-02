'use client';

import { Worker } from '@react-pdf-viewer/core';
import NoteViewer from './note-viewer';
import { ITopic } from '@/types/course';

interface INoteViewerWithWorkerProps {
  note: ITopic;
  noteStatus?: boolean;
}

export default function NoteViewerWithWorker({
  note,
  noteStatus,
}: INoteViewerWithWorkerProps) {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <NoteViewer note={note} noteStatus={noteStatus} />
    </Worker>
  );
}

