import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface AddOnItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AddOnItem: React.FC<AddOnItemProps> = ({ title, isOpen, onToggle }) => (
  <div 
    onClick={onToggle}
    className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 cursor-pointer transition-all hover:shadow-md"
  >
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-800">{title}</span>
      <Plus
        size={16}
        className={`transform transition-transform ${isOpen ? 'rotate-45' : ''} text-gray-600`}
      />
    </div>
    {isOpen && (
      <div className="mt-4 pt-4 border-t text-sm text-gray-600">
        <p>This add-on enhances your experience with additional features and capabilities. Contact our sales team for detailed pricing information.</p>
      </div>
    )}
  </div>
);

const AddOns: React.FC = () => {
  const [openSingleItems, setOpenSingleItems] = useState<number[]>([]);
  const [openSubscriptionItems, setOpenSubscriptionItems] = useState<number[]>([]);

  const singlePurchaseItems = [
    "Custom QR Code Design Package",
    "Premium Stand Design",
    "Advanced Analytics Dashboard",
    "White-label Solution"
  ];

  const subscriptionItems = [
    "Enhanced Customer Support",
    "Advanced Data Analytics",
    "Multi-location Management",
    "Custom Integration Solutions"
  ];

  const toggleSingleItem = (index: number) => {
    setOpenSingleItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleSubscriptionItem = (index: number) => {
    setOpenSubscriptionItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 max-md:py-0 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Single Purchase Add-ons */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Add-On's (Single Purchase)
          </h3>
          <div className="space-y-3">
            {singlePurchaseItems.map((item, index) => (
              <AddOnItem
                key={index}
                title={item}
                isOpen={openSingleItems.includes(index)}
                onToggle={() => toggleSingleItem(index)}
              />
            ))}
          </div>
        </div>

        {/* Subscription Add-ons */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Add-On's (Subscription/month)
          </h3>
          <div className="space-y-3">
            {subscriptionItems.map((item, index) => (
              <AddOnItem
                key={index}
                title={item}
                isOpen={openSubscriptionItems.includes(index)}
                onToggle={() => toggleSubscriptionItem(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOns;