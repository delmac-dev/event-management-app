'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import MyDocument from './my-doc';

const DownloadButton = () => (
  <PDFDownloadLink document={<MyDocument />} fileName="sample.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download PDF'
    }
  </PDFDownloadLink>
);

export default DownloadButton;