import React from 'react';
import { Check } from 'lucide-react';

interface PricingFeatureProps {
  text: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ text }) => (
  <div className="flex items-center space-x-2">
    <Check size={20} className="text-gray-900 flex-shrink-0" />
    <span className="text-gray-700">{text}</span>
  </div>
);

const Pricing: React.FC = () => {
  const features = [
    "QR Code - Stickers & Creative Designs",
    "24/7 Customer Support",
    "Coupon Tracking System",
    "Customizable Dashboard & Analytics",
    "Customer Feedback Forms",
    "Unlimited Backup & Reviews",
    "Dedicated Email Domain Service",
    "Basic Email Support",
    "Advanced Filtering System"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider text-gray-500 font-poppins">Pricing</p>
        <h2 className="max-sm:text-3xl mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <h3 className="mt-2 max-sm:text-2xl text-3xl font-bold text-[#1a1060]">
          Everything You Need in One Plan
        </h3>
        <p className="mt-4 max-sm:text-lg text-xl text-gray-600 max-w-3xl mx-auto">
          Start with 14 days of free access to Entugo powerful tools with a fully
          refundable safety deposit. After the trial, continue with our all-in-one
          subscription or customize your experience with optional add-ons.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          {/* Pricing Table */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3">
              <div className="font-medium text-gray-900">Ultimate Growth Plan</div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">$25</span>
                <span className="ml-1 text-gray-500">/monthly</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center py-3 border-t">
              <div className="font-medium text-gray-900">3D QR & Stand Designs (One time only)</div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold">$5</span>
                <span className="ml-1 text-gray-500">One time</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-t">
              <div className="font-medium text-gray-900">Email Marketing (Subscription/Month)</div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold">$5</span>
                <span className="ml-1 text-gray-500">/monthly</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-3 border-t">
              <div className="font-bold text-gray-900">Total</div>
              <div className="text-2xl font-bold">$35</div>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors">
            Buy
          </button>
        </div>

        {/* Features List */}
        <div className="mt-12">
          <div className="flex items-center space-x-2 mb-4">
            <h4 className="text-lg font-semibold">Ultimate Growth Plan</h4>
            <span className="text-yellow-500">⭐</span>
          </div>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl font-bold">$25</span>
            <span className="ml-1 text-gray-500">/monthly</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <PricingFeature key={index} text={feature} />
            ))}
          </div>
          <p className="mt-6 text-gray-600">
            Enjoy a 14-day free trial with a refundable safety deposit, followed by a single flat-fee subscription—no hidden costs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;