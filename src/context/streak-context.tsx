'use client';

import React, {
  createContext,
  useEffect,
  useContext,
  ReactNode,
  useState,
} from 'react';
import dayjs from 'dayjs';

import LocalStorage from '@/lib/local-storage';
import { markStreakAsCompleted } from '@/actions/streak';

const STREAK_DURATION =
  parseInt(process.env.NEXT_PUBLIC_STREAK_LIMIT as string) || 1;

export interface Streak {
  id?: string;
  currentTime: string;
  timeRemaining?: number;
  isCompleted?: boolean;
}

const storage = new LocalStorage<Streak>();

interface StreakContextProps {
  streak: Streak | null;
}

const StreakContext = createContext<StreakContextProps | null>(null);

export const StreakProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [streak, setStreak] = useState<Streak | null>(null);

  useEffect(() => {
    const savedStreak = storage.get('streak');
    const curTime = dayjs();
    if (savedStreak) {
      if (curTime.isAfter(dayjs(savedStreak.currentTime))) {
        console.log('Streak updated');
        storage.save('streak', {
          currentTime: curTime.toISOString(),
        });
        setStreak({
          currentTime: curTime.toISOString(),
        });
        return;
      }
      setStreak((prev) => {
        return {
          ...prev,
          ...savedStreak,
          timeRemaining:
            STREAK_DURATION -
            curTime.diff(dayjs(savedStreak.currentTime), 'minutes'),
        };
      });
    } else {
      const newStreak: Streak = {
        currentTime: dayjs().toISOString(),
      };
      storage.save('streak', newStreak);
      setStreak(newStreak);
    }
  }, []);

  const checkStreak = async () => {
    if (streak) {
      const currentTime = dayjs();
      const savedTime = dayjs(streak.currentTime);
      const diff = currentTime.diff(savedTime, 'minutes');

      if (diff >= STREAK_DURATION) {
        const res = await markStreakAsCompleted();
        console.log('Streak updated', res);
        setStreak({
          ...streak,
          timeRemaining: 0,
          isCompleted: true,
        });
        storage.save('streak', {
          ...streak,
          timeRemaining: 0,
          isCompleted: true,
        });
      }
    }
  };

  useEffect(() => {
    if (streak && !streak?.isCompleted) {
      const interval = setInterval(() => {
        checkStreak();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [streak]);

  return (
    <StreakContext.Provider value={{ streak }}>
      {children}
    </StreakContext.Provider>
  );
};

export const useStreak = () => {
  const context = useContext(StreakContext);
  if (!context) {
    throw new Error('useStreak must be used within a StreakProvider');
  }
  return context;
};
