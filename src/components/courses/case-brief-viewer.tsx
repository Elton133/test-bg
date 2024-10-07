import { useNoteSidePanel } from '@/context/note-side-panel-context';

export default function CaseBriefViewer({ html }: { html: string }) {
  const { openSidePanel } = useNoteSidePanel();
  return openSidePanel ? (
    <section
      className={
        'p-4 max-w-[1100px] mx-auto flex justify-center overflow-hidden'
      }
    >
      <div
        className={
          'prose bg-white min-h-[600px] rounded-[20px] p-4 min-w-full prose-headings:underline'
        }
        dangerouslySetInnerHTML={{
          __html:
            html ||
            `
            <p>Case Brief Not Found</p>
          `,
        }}
      />
    </section>
  ) : null;
}
