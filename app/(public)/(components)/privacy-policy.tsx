import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Privacy Policy</h2>
            <Card className="mb-8 border-blue-200 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl text-center font-semibold text-blue-600">Our Commitment to Privacy</CardTitle>
                </CardHeader>
                <CardContent className="lg:text-left text-center">
                    <p className="text-lg font-semibold italic text-gray-600">
                        Last updated: July 24, 2024
                    </p>
                    <p className="mt-4 text-gray-700">
                        We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data and tell you about your privacy rights.
                    </p>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <div className="p-3 lg:p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Information We Collect</h3>
                    <p className="text-gray-700">
                        We may collect, use, store and transfer different kinds of personal data about you, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Identity Data</li>
                        <li>Contact Data</li>
                        <li>Technical Data</li>
                        <li>Usage Data</li>
                    </ul>
                </div>

                <div className="p-3 lg:p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">How We Use Your Information</h3>
                    <p className="text-gray-700">
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>To provide and maintain our service</li>
                        <li>To notify you about changes to our service</li>
                        <li>To provide customer support</li>
                        <li>To gather analysis or valuable information so that we can improve our service</li>
                    </ul>
                </div>

                <div className="p-3 lg:p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Data Security</h3>
                    <p className="text-gray-700">
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                    </p>
                </div>

                <div className="p-3 lg:p-6 bg-white rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-600 mb-4">Your Legal Rights</h3>
                    <p className="text-gray-700">
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                        <li>Request access to your personal data</li>
                        <li>Request correction of your personal data</li>
                        <li>Request erasure of your personal data</li>
                        <li>Object to processing of your personal data</li>
                        <li>Request restriction of processing your personal data</li>
                        <li>Request transfer of your personal data</li>
                        <li>Right to withdraw consent</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
