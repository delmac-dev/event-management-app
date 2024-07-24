import React from 'react';
import { Card, CardHeader, CardContent, CardDescription } from '@/components/ui/card';
import Header from "../(components)/header";
import { Calendar, Megaphone, ClipboardList, Ticket, Users, Bell } from 'lucide-react';

interface SectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const sections: SectionProps[] = [
  {
    title: 'Create Events',
    description: 'Easily create and customize events. Share them with everyone on campus to boost participation.',
    icon: <Calendar className="w-6 h-6" />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Promote Events',
    description: 'Promote your events with targeted notifications and announcements to ensure maximum visibility.',
    icon: <Megaphone className="w-6 h-6" />,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Manage Events',
    description: 'Keep track of all event details, schedules, and attendee lists in one place. Simplify event management.',
    icon: <ClipboardList className="w-6 h-6" />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Book Tickets',
    description: 'Browse events, book tickets, and join like-minded individuals for exciting campus activities.',
    icon: <Ticket className="w-6 h-6" />,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    title: 'Join Communities',
    description: 'Discover and join interest groups. Connect and interact with people who share your passions.',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    title: 'Stay Informed',
    description: 'Get real-time updates and notifications about events and activities happening on campus.',
    icon: <Bell className="w-6 h-6" />,
    color: 'bg-orange-100 text-orange-600',
  },
];

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 lg:p-8 px-5 pt-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your All-in-One Event App</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover, create, and experience amazing events on campus with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className={`p-6 ${section.color}`}>
                <CardHeader className="flex items-center space-x-3 p-0">
                  <div className="bg-white rounded-full p-2">{section.icon}</div>
                  <h2 className="text-lg font-medium">{section.title}</h2>
                </CardHeader>
              </div>
              <CardContent className="p-6">
                <CardDescription className="text-base text-gray-700">{section.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
