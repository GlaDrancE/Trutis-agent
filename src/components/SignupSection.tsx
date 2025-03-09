import React from "react";
import { ChevronRight } from "lucide-react";
import { assets } from "../assets/assets";

const SignUpSection: React.FC = () => {
  return (
    <section
      className="py-20 relative"
      style={{
        background: "linear-gradient(0deg, #D2DCFF 0%, #FFFFFF 100%)", // Bottom-to-top gradient
      }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8 text-center">
        {/* Decorative 3D Elements with PNG Images */}
        <div className="absolute top-0 left-0 w-1/4 h-w-1/4 max-sm:translate-x-[-30%] max-sm:translate-y-[-10%] translate-x-[15%] translate-y-[-30%]">
          <img
            src="https://s3-alpha-sig.figma.com/img/0edd/4bc8/6cf6130bed0875ae4dc980bec07b6949?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=arxwfokz8-FUeEJ~a0YMn6JIkmJb4rKU8UsehpxVRI5KxHVkKRZ-ol4MS0GVW3vKwXAqCZqxVgy4-f6qAEwuUzdkaIQI0aJCTSgCVLBRwAjVlgrsQetT~YV0VQU8QUadrlsTnQk2qa77~iDtwmegQ8bWZsZ-1jT0uwI6Xv00e-0dVzsSxD36KjVgSTmwiDzTX3gRzkzSzQRKcKMY3rzithgdZIk6idskip8RbISqDg2FJdGxYBa5A~172XKR3sylIrYa8EcZsljpXYZ1o-B~hunMRLmbdsMpNRP7qOYII-ACwHYkq8GFc8vftclJtp8IT5K9GVPK~WMUs8QigejmSg__" // Replace with your star 3D model PNG path
            alt="Star 3D Model"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1w-1/4 translate-x-[-10%] translate-y-[8%]">
          <img
            src="https://s3-alpha-sig.figma.com/img/0e65/8782/2e1e09e9aaf9ea4e60ebf16c4057c2f9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FXZgojjRFCsnN3~~Hfisy8tETBdysRlMp91i6KASWU0Ka2d23ZtMSszEvSX75Rog79Xf1Tv8J2j0Km~~xO6FA6o3FXTwFTFYDZEf7HfjOknvbdEI8lUW2HePNJqLu93FEyOERpOsh9TyrtvKrkdfmmuPpHi18R4RzqdFU0jUGxkkg2SnP1MnnclABTgemCbo0bgeaJjAanK~RUsyQ9oDnBm0GbrHt5sj39l1fGkdQm~6lSUSEI~xgTC9oppIiAs65XyK74vhlRHiRat-Gv6TKeygusgIU0YQA-PhRL~iifyh9iyP4rrWA6xVDAYmMsnL4Poc-frrMQoarlxvM~F2Hw__" // Replace with your spiral 3D model PNG path
            alt="Spiral 3D Model"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-gray-900 mb-4 font-poppins">
            Sign up for free today
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-sm:text-base max-w-xl mx-auto font-poppins">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <div className="space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800  transition-colors">
              Get for free
            </button>
            <a
              href="#learn-more"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;