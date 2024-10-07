'use client';
import { useNoteSidePanel } from '@/context/note-side-panel-context';

export default function CourseMenuBar() {
  const { openSidePanel, toggleSidePanel } = useNoteSidePanel();

  return (
    <div
      className={
        'fixed bottom-10 md:right-1 px-8 md:px-0 w-full md:flex justify-center'
      }
    >
      {!openSidePanel && (
        <div
          className={
            'w-full flex justify-center items-center gap-4 font-semibold bg-[#313D3B] text-white p-4 md:p-4 max-w-[400px] rounded-[50px] animate-fade-up'
          }
        >
          <button className={'md:hidden'} onClick={toggleSidePanel}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M2.65 14.25C2.65 15.1337 3.36634 15.85 4.25 15.85H15.5C16.3837 15.85 17.1 15.1337 17.1 14.25V3.75C17.1 2.86634 16.3837 2.15 15.5 2.15H4.25C3.36634 2.15 2.65 2.86634 2.65 3.75V14.25ZM4.25 3.1H7.15V14.9H4.25C3.89101 14.9 3.6 14.609 3.6 14.25V3.75C3.6 3.39101 3.89101 3.1 4.25 3.1ZM15.5 14.9H8.1V3.1H15.5C15.859 3.1 16.15 3.39101 16.15 3.75V14.25C16.15 14.609 15.859 14.9 15.5 14.9Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
