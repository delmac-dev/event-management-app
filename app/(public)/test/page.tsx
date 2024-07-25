import React from 'react';
import dynamic from 'next/dynamic';

const DownloadButton = dynamic(() => import('../(components)/download-button'), {
  ssr: false,
});

const TestPage = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <DownloadButton />
    </div>
  );
};

export default TestPage;
