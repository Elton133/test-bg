'use client';
import {
  Viewer,
  RenderPageProps,
  PageChangeEvent,
  Rect,
  PdfJs,
} from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import { ITopic } from '@/types/course';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/bookmark/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import { ArrowDown, ArrowUp } from 'iconsax-react';
import { useNoteSidePanel } from '@/context/note-side-panel-context';
import { cn } from '@/lib/utils';
import useLocalStorage from '@hooks/use-local-storage';

interface INoteViewerProps {
  note: ITopic;
}

interface INotePreference {
  currentPage: number;
  doc: PdfJs.PdfDocument | null;
}

export default function NoteViewer({ note }: INoteViewerProps) {
  const { openSidePanel, toggleSidePanel } = useNoteSidePanel();
  const [notePreference, setNotePreference] =
    useLocalStorage<INotePreference>('__note_pref_' + note.slug, {
      currentPage: 0,
      doc: null,
    });
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const scrollModePluginInstance = scrollModePlugin();
  const {
    GoToNextPage,
    GoToPreviousPage,
    CurrentPageLabel,
    NumberOfPages,
  } = pageNavigationPluginInstance;
  const bookmarkPluginInstance = bookmarkPlugin();
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;

  const pageLayout = {
    buildPageStyles: () => ({
      alignItems: 'center',
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      borderRadius: '50px',
      backgroundColor: '#fff',
      // padding: "20px",
    }),
    transformSize: ({ size }: { size: Rect }) => ({
      height: size.height + 30,
      width: size.width,
    }),
  };

  const renderPage = (props: RenderPageProps) => {
    return (
      <div className={'no-scrollbar bg-blue-600 w-52'}>
        {props.canvasLayer.children}
        <div style={{ userSelect: 'none' }}>
          {props.textLayer.children}
        </div>
        {props.annotationLayer.children}
      </div>
    );
  };

  const handlePageChange = (e: PageChangeEvent) => {
    if (
      notePreference.currentPage !== e.currentPage &&
      e.currentPage !== 0
    ) {
      setNotePreference({
        ...notePreference,
        currentPage: e.currentPage,
      });
    }
  };

  return (
    <section
      className={cn(
        'h-[calc(100vh_-_250px)] max-w-[1100px] mx-auto no-scrollbar py-4',
        {
          'hidden md:block': openSidePanel,
        }
      )}
    >
      <Viewer
        fileUrl={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${note?.pdf}`}
        enableSmoothScroll
        plugins={[
          pageNavigationPluginInstance,
          scrollModePluginInstance,
          toolbarPluginInstance,
          bookmarkPluginInstance,
        ]}
        initialPage={notePreference.currentPage}
        onPageChange={handlePageChange}
        pageLayout={pageLayout}
        renderPage={renderPage}
        httpHeaders={{
          AllowedHeaders: ['*'],
          AllowedMethods: ['GET', 'POST'],
          AllowedOrigins: ['*'],
          ExposeHeaders: [],
        }}
      />
      <div
        className={
          'fixed bottom-10 md:right-1 px-8 md:px-0 w-full md:flex justify-center'
        }
      >
        <div
          className={
            'w-full flex justify-center items-center gap-4 font-semibold bg-[#313D3B] text-white p-4 md:p-4 max-w-[400px] rounded-[50px]'
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
          <CurrentPageLabel>
            {(props) => (
              <p className="inline-flex justify-center items-center font-semibold xs:text-xs md:text-sm">
                <span className="border px-4 rounded-lg mr-2">{`${
                  props.currentPage + 1
                }`}</span>{' '}
                out of{' '}
                <span className="ml-2">{`${props.numberOfPages}`}</span>
              </p>
            )}
          </CurrentPageLabel>
          <div className="hidden md:flex gap-2">
            <GoToNextPage>
              {(prop) => (
                <ArrowDown
                  className={'cursor-pointer'}
                  onClick={prop.onClick}
                />
              )}
            </GoToNextPage>
            <GoToPreviousPage>
              {(prop) => (
                <ArrowUp
                  className={'cursor-pointer'}
                  onClick={prop.onClick}
                />
              )}
            </GoToPreviousPage>
          </div>
          {/* Overriding again :( */}
          {/*<Toolbar>*/}
          {/*  {(slots) => {*/}
          {/*    const {*/}
          {/*      EnterFullScreen,*/}
          {/*    } = slots;*/}
          {/*    return (*/}
          {/*        <div className="flex items-center gap-2 md:gap-10 xs:justify-between md:justify-center text-white">*/}
          {/*          <div className="flex gap-2">*/}
          {/*            <EnterFullScreen>*/}
          {/*              {(props) => (*/}
          {/*                  <Tooltip content={'Fullscreen'}>*/}
          {/*                    <MdOutlineFitScreen*/}
          {/*                        size={24}*/}
          {/*                        className={'cursor-pointer'}*/}
          {/*                        onClick={props.onClick}*/}
          {/*                    />*/}
          {/*                  </Tooltip>*/}
          {/*              )}*/}
          {/*            </EnterFullScreen>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*    );*/}
          {/*  }}*/}
          {/*</Toolbar>*/}
        </div>
      </div>
    </section>
  );
}
