import React from 'react';
import dynamic from 'next/dynamic';
import { SAMPLE_ATTENDEE } from '@/lib/constants';

const DownloadButton = dynamic(() => import('../(components)/print-ticket-button'), {
  ssr: false,
});

const TestPage = () => {
  return (
    <div className='w-full flex-1 flex_center flex-col gap-2'>
      <h1>Test Page</h1>
      <DownloadButton {...SAMPLE_ATTENDEE} />
    </div>
  );
};

export default TestPage;
