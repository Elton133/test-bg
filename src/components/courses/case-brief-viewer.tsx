import { markResourceAsCompleted } from '@/actions/courses';
import { useNoteSidePanel } from '@/context/note-side-panel-context';
import useWindowScroll from '@/hooks/useWindowScroll';
import { useEffect } from 'react';

export default function CaseBriefViewer({ html, noteId }: { html: string, noteId: string }) {
  const { openSidePanel } = useNoteSidePanel();
  const { y } = useWindowScroll();
  // console.log(y);
  useEffect(() => {
    if (window !== undefined) {
      const totalHeight = document.body.scrollHeight;
      const currentScroll = y + window.innerHeight;
      if (currentScroll >= totalHeight) {
        markResourceAsCompleted(noteId, {
          case_brief_completed: true
        })
      }
    }
  }, [y, noteId]);
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
