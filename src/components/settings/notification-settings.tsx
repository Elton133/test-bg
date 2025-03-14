'use client';

import { Switch } from '@/components/ui/switch';
import useLocalStorage from '@/hooks/use-local-storage';
import { toast } from 'sonner';
import { Label } from '../ui/label';
import { useEffect, useState } from 'react';
import { updateNotificationSettings } from '@/actions/notifications';

interface NotificationSettingsProps {
  show: boolean;
  receive: boolean;
  special_offer: boolean;
}

export function NotificationSettings({
  show,
  receive,
  special_offer,
}: NotificationSettingsProps) {
  const [prefs, setPrefs] = useLocalStorage<NotificationSettingsProps>(
    'userPrefs',
    {
      show: false,
      receive: false,
      special_offer: false,
    }
  );
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleToggle = async (
    key: keyof NotificationSettingsProps,
    value: boolean
  ) => {
    setLoading(true);
    const newPrefs = { ...prefs, [key]: value };
    setPrefs(newPrefs);
    await updateNotificationSettings(newPrefs);

    let message = '';
    switch (key) {
      case 'show':
        message = value
          ? 'You will now receive notifications'
          : 'You will no longer receive notifications';
        break;
      case 'receive':
        message = value
          ? 'You will now receive notifications for new uploads'
          : 'You will no longer receive notifications for new uploads';
        break;
      case 'special_offer':
        message = value
          ? 'You will now receive special offers and events'
          : 'You will no longer receive special offers and events';
        break;
    }
    setLoading(false);
    toast.success(message);
  };

  if (!hydrated) return null;

  return (
    <div>
      <div className="v-stack gap-6 max-w-[550px]">
        <div className="h-stack justify-between">
          <div className="space-y-0.5">
            <Label className="text-sm" htmlFor="showNotifications">
              Show notifications
            </Label>
          </div>
          <Switch
            id="showNotifications"
            checked={show}
            disabled={loading}
            onCheckedChange={(value) => handleToggle('show', value)}
          />
        </div>
        <div className="h-stack justify-between">
          <div className="space-y-0.5">
            <Label className="text-sm" htmlFor="showNewUploads">
              Receive notifications for new uploads
            </Label>
          </div>
          <Switch
            id="showNewUploads"
            checked={receive}
            disabled={loading}
            onCheckedChange={(value) => handleToggle('receive', value)}
          />
        </div>
        <div className="h-stack justify-between">
          <div className="space-y-0.5">
            <Label className="text-sm" htmlFor="receiveSpecialOffers">
              Special offers and events
            </Label>
          </div>
          <Switch
            id="receiveSpecialOffers"
            checked={special_offer}
            disabled={loading}
            onCheckedChange={(value) =>
              handleToggle('special_offer', value)
            }
          />
        </div>
      </div>
    </div>
  );
}
