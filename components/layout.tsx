import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className='flex flex-col h-full mx-[8%] md:mx-[12%] lg:mx-[15%]'>{children}</div>;
}
