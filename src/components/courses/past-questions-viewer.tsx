'use client';

import { useNoteSidePanel } from '@/context/note-side-panel-context';
import useWindowScroll from '@hooks/useWindowScroll';
import { useEffect } from 'react';
import { markResourceAsCompleted } from '@/actions/courses';

export default function PastQuestionsViewer({
  html,
  noteId,
}: {
  html: string;
  noteId: string
}) {
  const { y } = useWindowScroll();
  const { openSidePanel } = useNoteSidePanel();
  useEffect(() => {
    if (window !== undefined) {
      const totalHeight = document.body.scrollHeight;
      const currentScroll = y + window.innerHeight;
      if (currentScroll >= totalHeight) {
        markResourceAsCompleted(noteId, {
          pqi_completed: true
        })
      }
    }
  }, [y, noteId]);

  return !openSidePanel ? (
    <section
      className={
        'p-4 max-w-[1100px] mx-auto flex justify-center overflow-hidden'
      }
    >
      <div
        className={
          'prose bg-white min-h-[600px] rounded-[20px] p-4 min-w-full prose-headings:underline'
        }
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  ) : null;
}
