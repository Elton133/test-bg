'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Progress } from '@components/ui/progress';

const useAnimatedProgress = (progress: number) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const parsedProgress = parseInt(String(progress), 10);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= parsedProgress) {
        clearInterval(interval);
        currentProgress = parsedProgress;
      }
      setAnimatedProgress(currentProgress);
    }, 10); // Adjust the interval time for smoother or faster animation

    return () => clearInterval(interval);
  }, [parsedProgress]);

  return animatedProgress;
};

export default useAnimatedProgress;
