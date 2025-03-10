import { NotificationSettings } from '@/components/settings/notification-settings';
import { Switch } from '@components/ui/switch';

export default async function NotificationPage() {
  return (
    <section className={'w-full'}>
      <NotificationSettings />
    </section>
  );
}
