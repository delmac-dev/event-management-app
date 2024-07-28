'use client';

import { PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState } from 'react';
import TicketDetailPDF from './ticket-details-pdf';
import { FetchedPublicAttendeesProps } from '@/lib/types';
import { Button } from '@/components/ui/button';
import SpinnerIcon from '@/components/icons/spinner-icon';

const DownloadButton = (props: FetchedPublicAttendeesProps) => {
  const [disabled, setDisabled] = useState(false);
  const fileName = `${props.full_name}_${props.ticket_code}.pdf`;

  return (
    <Button disabled={disabled}>
      {disabled && <SpinnerIcon className="size-8 text-primary-foreground mr-2" />}
      <PDFDownloadLink document={<TicketDetailPDF {...props} />} fileName={fileName}>
        {({ blob, url, loading, error }) => {
          setDisabled(loading);
          return "Download your ticket"
        }}
      </PDFDownloadLink>
    </Button>
)};

export default DownloadButton;