'use client';

import { Switch } from '@/components/ui/switch';
import useLocalStorage from '@/hooks/use-local-storage';
import { toast } from 'sonner';
import { Label } from '../ui/label';
import { useEffect, useState } from 'react';

type UserPrefsType = {
  showNotifications: boolean;
  showNewUploads: boolean;
  receiveSpecialOffers: boolean;
};

export function NotificationSettings() {
  const [prefs, setPrefs] = useLocalStorage<UserPrefsType>(
    'userPrefs',
    {
      showNotifications: false,
      showNewUploads: false,
      receiveSpecialOffers: false,
    }
  );
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const handleToggle = (key: keyof UserPrefsType, value: boolean) => {
    const newPrefs = { ...prefs, [key]: value };
    setPrefs(newPrefs);

    let message = '';
    switch (key) {
      case 'showNotifications':
        message = value
          ? 'You will now receive notifications'
          : 'You will no longer receive notifications';
        break;
      case 'showNewUploads':
        message = value
          ? 'You will now receive notifications for new uploads'
          : 'You will no longer receive notifications for new uploads';
        break;
      case 'receiveSpecialOffers':
        message = value
          ? 'You will now receive special offers and events'
          : 'You will no longer receive special offers and events';
        break;
    }
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
            checked={prefs.showNotifications}
            onCheckedChange={(value) =>
              handleToggle('showNotifications', value)
            }
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
            checked={prefs.showNewUploads}
            onCheckedChange={(value) =>
              handleToggle('showNewUploads', value)
            }
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
            checked={prefs.receiveSpecialOffers}
            onCheckedChange={(value) =>
              handleToggle('receiveSpecialOffers', value)
            }
          />
        </div>
      </div>
    </div>
  );
}
