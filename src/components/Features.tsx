import React from 'react';
import { QrCode, Gift, Database, ToggleLeft as Google, Target, Laptop } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 space-y-2">
    <div className="text-gray-900 mb-2">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 font-poppins">{title}</h3>
    <p className="text-gray-600 leading-relaxed ">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <QrCode size={32} />,
      title: "Instant QR Feedback",
      description: "Customers scan a QR code to leave feedback in seconds, making engagement effortless."
    },
    {
      icon: <Gift size={32} />,
      title: "Automated Rewards",
      description: "Send discount coupons instantly to encourage repeat visits and build loyalty."
    },
    {
      icon: <Database size={32} />,
      title: "Customer Data Collection",
      description: "Securely collect customer details with consent, helping you build a valuable marketing list."
    },
    {
      icon: <Google size={32} />,
      title: "Seamless Google Integration",
      description: "Boost your online reputation by directing customers to leave reviews on Google."
    },
    {
      icon: <Target size={32} />,
      title: "Targeted Marketing",
      description: "Use collected data to send personalized email and WhatsApp promotions."
    },
    {
      icon: <Laptop size={32} />,
      title: "Easy Setup, No Tech Hassle",
      description: "Place the QR stand, and Entugo does the rest — no extra hardware or coding needed."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="max-sm:text-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-poppins">
          Designed for Simplicity, Built for Growth
        </h2>
        <p className="max-sm:text-lg mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Entugo makes it effortless to collect feedback, reward customers, and keep them
          coming back. With automated engagement tools, businesses can focus on growth while
          Entugo handles the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-sm:gap-y-0 gap-x-8 gap-y-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;