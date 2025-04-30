'use client';
import { SessionProvider } from 'next-auth/react';

import React from 'react';

const SessionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SessionProvider refetchOnWindowFocus refetchInterval={60}>
      {children}
    </SessionProvider>
  );
};

export default SessionWrapper;
