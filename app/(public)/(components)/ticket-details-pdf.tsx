import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import React from 'react';
import QRCode from 'qrcode.react';
import { FetchedPublicAttendeesProps } from '@/lib/types';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dashed',
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  qrCode: {
    marginTop: 10,
    alignSelf: 'center',
  }
});

const TicketDetailPDF = (props: FetchedPublicAttendeesProps) => {
  const { full_name, email, ticket_code, tickets } = props;
  const { name: ticketName, events } = tickets;
  const { name, headline, event_date, start_at } = events;
 
  
  // const qrCodeData = QRCode.toDataURL(ticket_code);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Ticket Holder Information</Text>
          <Text style={styles.text}>Full Name: {full_name}</Text>
          <Text style={styles.text}>Email: {email}</Text>
          <Text style={styles.text}>Ticket Code: {ticket_code}</Text>
          <Text style={styles.text}>Ticket Name: {ticketName}</Text> 
          {/* <Image src={qrCodeData} style={styles.qrCode} /> */}
        </View>
        <View style={styles.section}>
          <Text style={styles.header}>Event Information</Text>
          <Text style={styles.text}>Event Name: {name}</Text>
          <Text style={styles.text}>Headline: {headline}</Text>
          <Text style={styles.text}>Event Date: {event_date}</Text>
          <Text style={styles.text}>Event Time: {start_at}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default TicketDetailPDF;
