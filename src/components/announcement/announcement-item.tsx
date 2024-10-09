'use client';

import { IAnnouncement } from '@/types/course';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { markAnnouncementAsRead } from '@/actions/announcements';
import Link from 'next/link';

dayjs.extend(relativeTime);

const AnnouncementItem = ({
  announcement,
  cb,
}: {
  announcement: IAnnouncement;
  cb?: () => void;
}) => {
  return (
    <button
      className={
        'min-h-[80px] h-full w-full text-left bg-[#D0EFE9] rounded-lg p-3 relative cursor-pointer'
      }
      onClick={async () => {
        await markAnnouncementAsRead(announcement?.id)
        cb && cb();
      }}
    >
      <svg
        className={
          'top-3 right-3 absolute animate-thrice animate-pulse animate-duration-500 animate-delay-200'
        }
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <circle cx="4" cy="4" r="4" fill="#E57A5A" />
      </svg>
      <div className={'flex flex-col gap-2'}>
        <p className={'text-sm font-bold'}>{announcement?.title}</p>
        {announcement.type === 'general' && (
          <p className={'text-xs text-muted'}>
            {announcement?.content}
          </p>
        )}
        {announcement.type === 'study cafe' && (
          <p className={'text-xs text-muted'}>
            {`${announcement?.content}. `}
            <Link
              href={announcement.url as string}
              target={'_blank'}
              className={'text-[#3A7FA8] font-medium'}
            >
              Join Now
            </Link>
          </p>
        )}
        <p className={'text-xs text-muted place-self-end'}>
          {dayjs(announcement?.created_at).fromNow()}
        </p>
      </div>
    </button>
  );
};

export default AnnouncementItem;
