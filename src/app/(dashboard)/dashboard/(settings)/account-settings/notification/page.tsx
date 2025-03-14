import {
  getNotificationSettings,
  NotificationRes,
} from '@/actions/notifications';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { NotificationSettings } from '@/components/settings/notification-settings';
import { getServerSession } from 'next-auth';

export default async function NotificationPage() {
  const session = await getServerSession(authOptions);
  const settings = (await getNotificationSettings(
    session?.user?.id as string
  )) as NotificationRes;

  return (
    <section className={'w-full'}>
      <NotificationSettings {...settings.settings} />
    </section>
  );
}
