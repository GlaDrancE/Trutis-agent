import React, { useState, useEffect } from 'react';

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    handle: string;
    image: string;
  };
  isBlurred?: boolean;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, isBlurred }) => (
  <div className={`bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow ${isBlurred ? 'opacity-60' : ''}`}>
    <p className={`text-gray-600 text-[15px] leading-relaxed mb-6 ${isBlurred ? 'text-gray-400' : ''}`}>{content}</p>
    <div className="flex items-center gap-3">
      <img
        src={author.image}
        alt={author.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h4 className="font-medium text-[15px] text-gray-900">{author.name}</h4>
        <p className="text-gray-500 text-sm">{author.handle}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      author: {
        name: "Alex Rivera",
        handle: "@jamietechguru00",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "I was amazed at how quickly we were able to integrate this app into our workflow.",
      author: {
        name: "Casey Jordan",
        handle: "@caseyj",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      author: {
        name: "Jordan Patels",
        handle: "@jpatelsdesign",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "Our team's productivity has skyrocketed since we started using this tool.",
      author: {
        name: "Josh Smith",
        handle: "@jjsmith",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      author: {
        name: "Taylor Kim",
        handle: "@taylorkimm",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      author: {
        name: "Sam Dawson",
        handle: "@dawsontechips",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "This app has completely transformed how I manage my projects and deadlines.",
      author: {
        name: "Morgan Lee",
        handle: "@morganleewhiz",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "The customizability and integration capabilities of this app are top-notch.",
      author: {
        name: "Riley Smith",
        handle: "@rileysmith1",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    },
    {
      content: "Its user-friendly interface and robust features support our diverse needs.",
      author: {
        name: "Casey Harper",
        handle: "@casey09",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      }
    }
  ];

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    console.log(window.innerWidth)
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1 mb-4 rounded-full bg-gray-100 text-sm font-poppins text-gray-700">
            Testimonials
          </div>
          <h1 className="font-poppins text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-[#0A0A29] mb-14">
            What our users say
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                ${index >= 3 ? 'max-sm:hidden' : ''} // Show 3 cards on sm and below
                ${index >= 4 ? 'max-md:hidden max-lg:block' : ''} // Show 4 cards on md, 6 on lg
                ${index >= 6 ? 'max-lg:hidden' : ''} // Limit to 6 cards on lg
              `}
            >
              <TestimonialCard
                content={testimonial.content}
                author={testimonial.author}
                isBlurred={
                  (windowWidth <= 639 && (index === 0 || index === 2)) || // Mobile: blur 1st and 3rd
                  ( windowWidth > 639 && windowWidth <= 1024 && index <= 1) ||                    // Tablet: blur 1st and 2nd
                  (windowWidth > 1024 && index < 3)                        // Larger: blur first 3
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;