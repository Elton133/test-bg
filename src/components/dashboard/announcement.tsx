import Speaker from '@components/icons/speaker';
import { getAnnouncements } from '@/actions/announcements';
import { IAnnouncement } from '@/types/course';
import AnnouncementItem from '@components/announcement/announcement-item';
import { Fragment } from 'react';
import useSWR from 'swr';

export default async function Announcement({
  announcements,
}: {
  announcements: IAnnouncement[];
}) {
  const { data } = useSWR<IAnnouncement[]>(
    '/announcements',
    getAnnouncements,
    {
      fallbackData: announcements,
    }
  );
  return (
    <section
      className={
        'max-w-[920px] mx-auto w-full min-h-[120px] rounded-xl border border-[#D3D5D6] py-6 px-3 animate-fade-up'
      }
    >
      <div
        className={
          'flex flex-row-reverse sm:flex-row justify-between sm:justify-start items-center gap-2 '
        }
      >
        <div className={'rounded-full bg-brand-yellow-secondary p-2'}>
          <Speaker size={24} />
        </div>
        <p className={'text-lg font-semibold'}>Announcements</p>
      </div>
      <div
        className={
          'w-full pt-8 overflow-x-scroll no-scrollbar max-h-[330px] h-full'
        }
      >
        {/*<EmptyAnnouncement />*/}

        {data &&
          data.length > 0 &&
          data.map((announcement, index) => (
            <Fragment key={announcement.id}>
              <AnnouncementItem announcement={announcement} />
              {/* {index !== 1 && index !== announcements.length && <hr className={'my-2'} />} */}
              <hr className={'my-2'} />
            </Fragment>
          ))}
        {data && data.length === 0 && <EmptyAnnouncement />}
      </div>
    </section>
  );
}

const EmptyAnnouncement = () => {
  return (
    <div className={'w-full flex flex-col items-center'}>
      <Speaker className={'opacity-20'} size={80} />
      <p className={'text-muted text-sm'}>
        There are no new notifications
      </p>
    </div>
  );
};
