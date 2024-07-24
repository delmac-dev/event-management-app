import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Header from '../(components)/header';

interface PricingOption {
    title: string;
    badge?: {
        text: string;
        color: 'default' | 'secondary' | 'destructive' | 'outline';
    };
    description: string;
    price: number | string;
    features: string[];
    buttonColor: string;
    cardColor: string;
    status: string;
    buttonstate: string;
}

const pricingOptions: PricingOption[] = [
    {
        title: 'Free',
        description: 'Perfect for casual event-goers',
        price: 0,
        features: [
            'Access to public events',
            'Basic event reminders',
            'Limited event creation'
        ],
        buttonColor: 'bg-green-500 hover:bg-green-600',
        cardColor: 'border-green-300',
        status: 'Current Plan',
        buttonstate: 'enabled'
    },
    {
        title: 'Standard',
        description: 'Great for regular event organizers',
        price: 9.99,
        features: [
            'All Free features',
            'Unlimited event creation',
            'Advanced event analytics',
            'Priority support'
        ],
        buttonColor: 'bg-blue-500 hover:bg-blue-600',
        cardColor: 'border-blue-200',
        status: 'Coming Soon',
        buttonstate: 'disabled'

    },
    {
        title: 'Premium',
        badge: { text: 'Best Value', color: 'secondary' },
        description: 'For power users and large-scale events',
        price: 19.99,
        features: [
            'All Standard features',
            'VIP event access',
            'Exclusive networking opportunities',
            'Dedicated account manager',
            'Custom branding options'
        ],
        buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
        cardColor: 'border-yellow-200',
        status: 'Coming Soon',
        buttonstate: 'disabled'

    },
];

const EventPricing: React.FC = () => {
    return (
        <>  <Header></Header>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-8">Pricing Options</h2>
                <p className="text-center text-lg mb-8">Choose the perfect plan for your event needs</p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {pricingOptions.map((option, index) => (
                        <Card key={index} className={`flex flex-col justify-between ${option.cardColor} shadow-lg`}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                                    {option.badge && (
                                        <Badge variant={option.badge.color} className="bg-yellow-50 text-yellow-500">{option.badge.text}</Badge>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground">{option.description}</p>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="mb-4">
                                    <span className="text-3xl font-bold">
                                        {typeof option.price === 'number' ? `$${option.price.toFixed(2)}` : option.price}
                                    </span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {option.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm">
                                            <Check className="h-4 w-4 text-green-500 mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <div className="p-6 pt-0">
                                <Button className={`w-full ${option.buttonColor} text-white`} disabled={option.buttonstate === 'disabled'}>
                                    {option.status}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>

    );
};

export default EventPricing;