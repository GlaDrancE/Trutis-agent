import React, { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Sample FAQ data (replace with your actual data)
  const faqData: FAQItem[] = [
    { id: 1, question: "How to Login", answer: "To log in, enter your username and password on the login page and click the 'Login' button." },
    { id: 2, question: "How to Reset Password", answer: "To reset your password, click 'Forgot Password' and follow the instructions sent to your email." },
    { id: 3, question: "How to Contact Support", answer: "You can contact support by emailing support@example.com or calling +1-800-555-1234." },
    { id: 4, question: "How to Update Profile", answer: "Go to the 'Profile' section, edit your details, and save the changes." },
    { id: 5, question: "How to Logout", answer: "Click your profile icon and select 'Logout' from the dropdown menu." },
    { id: 6, question: "How to Delete Account", answer: "Navigate to 'Account Settings', scroll to 'Delete Account', and confirm the action." },
    { id: 7, question: "How to Change Language", answer: "Go to 'Settings' and select your preferred language from the dropdown." },
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-0 md:py-12 bg-white">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        {/* FAQ Title */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-10 font-poppins">FAQ</h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(item.id)}
              >
                <span>{`${item.id}. ${item.question}`}</span>
                <Plus
                  className={`h-5 w-5 transition-transform ${openItem === item.id ? "rotate-45" : ""}`}
                />
              </button>
              {openItem === item.id && (
                <div className="px-6 py-4 text-gray-600 bg-gray-50">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;