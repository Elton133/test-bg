'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewerClient({ fileUrl }: { fileUrl: string }) {
  return (
    <div className="w-full flex justify-center">
      <Document file={fileUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
