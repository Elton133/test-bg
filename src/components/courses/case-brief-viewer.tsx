'use client';

import { useNoteSidePanel } from '@/context/note-side-panel-context';

export default function CaseBriefViewer({
  html,
  citation,
  title,
}: {
  html: string;
  citation: string;
  title: string;
}) {
  const { openSidePanel } = useNoteSidePanel();
  console.log('openSidePanel', html);
  return (
    <section
      className={
        'p-4 max-w-[1100px] mx-auto flex justify-center overflow-hidden'
      }
    >
      <div
        className={
          ' bg-white min-h-[600px] rounded-[20px] p-8 min-w-full v-stack stack-center'
        }
      >
        <div className={'text-center pb-6 v-stack gap-4'}>
          <h1 className={'text-2xl font-semibold'}>{title}</h1>
          <p>{citation}</p>
        </div>
        <div
          className={'prose prose-headings:underline'}
          dangerouslySetInnerHTML={{
            __html:
              html ||
              `
            <p>Case Brief Not Found</p>
          `,
          }}
        />
      </div>
    </section>
  );
}
