import React, { useState } from "react";
import { ChevronRight, Leaf, Settings, Lock } from "lucide-react";
import { assets } from "../assets/assets";

const RapidReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"business" | "customer">("business");

  return (
    <section
      className="py-12 relative"
      style={{
        background: "radial-gradient(circle at 24% 34%, #C9FFF5 0%, #DCE4FF 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-sm font-medium text-gray-700">Boost Your Engagement</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Rapid Reviews, Lasting Loyalty
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Curious how our QR-based review system supercharges customer engagement? Below is a quick look at how both
            customers and business owners benefit, turning a simple scan into better ratings and steady returns.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-white border border-[#8A4AF3] shadow-sm">
            <button
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                activeTab === "business"
                  ? "bg-[#8A4AF3] text-white"
                  : "bg-transparent text-[#8A4AF3]"
              }`}
              onClick={() => setActiveTab("business")}
              aria-label="View Business Features"
            >
              Business
            </button>
            <button
              className={`rounded-full px-6 py-2 font-medium transition-colors ${
                activeTab === "customer"
                  ? "bg-[#8A4AF3] text-white"
                  : "bg-transparent text-[#8A4AF3]"
              }`}
              onClick={() => setActiveTab("customer")}
              aria-label="View Customer Features"
            >
              Customer
            </button>
          </div>
        </div>

        {/* Demo Section */}
        <div className="relative mt-10 overflow-hidden rounded-lg bg-gray-600 shadow-xl">
          <div className="aspect-video w-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/f65e/0c2b/e15663431af0e7ccaf366b9baa354ca4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K1ZZb0X7P2YQmeRNfQiUX5gdP9RPPKu~pfteFonZIsORqjsrRIPfzFYiGgXNxFuNvp-9XC1FCwwiT5GeKboW-dAa2EWr4AKx92o7JcuRpcZjvY9KxzHpgl7vQx2gg9T5zKC7JY-VTJ0gE6mIpSVEiRuN6sVPMkq9UFDqHdx9-6DBOeEqwF~U82d6y~GK~Ua2HhOE4Qlz3EtYJTVgGXXlA3JVajGuY-RO93QxE~HrZd8BYjwApMNeogunEpRcEXHUlbyae8JsVMGZFpDt7OJBOUlUxEah5maRS42KUTybUyKtEo~JiZkPI8BR~uchrY85-lGnBaIkYgfjTaBuY21c2g__"
              alt="Product Demo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Decorative 3D Elements with PNG Images (Outside Central Image) */}
        <div className="absolute bottom-20 left-10 w-1/4 max-[500px]:hidden max-sm:translate-x-[-60%] max-sm:translate-y-[-700%]  max-md:translate-x-[-50%] max-md:translate-y-[-500%] max-lg:translate-x-[-50%] max-lg:translate-y-[-150%] max-xl:translate-x-[-50%] max-xl:translate-y-[-120%]
         translate-x-[-5%] translate-y-[-95%]">
          <img
            src={assets.torus} // Torus on bottom-left
            alt="Torus 3D Model"
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
        <div className="absolute top-20 right-6 w-[15%] max-[500px]:hidden max-sm:translate-y-[220%]  max-md:translate-y-[120%]    max-xl:translate-x-[10%] max-xl:translate-y-[80%]  translate-x-[-10%] translate-y-[40%]">
          <img
            src={assets.prisma} // Prism on top-right
            alt="Prism 3D Model"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Feature 1: Simple Setup */}
          <div className="flex flex-col items-start">
            <div className="mb-4 rounded-full bg-gray-100 p-3">
              <Leaf className="text-gray-700 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Simple Setup</h3>
            <p className="mt-2 text-gray-600">
              Place the QR stand wherever customers can easily see it. No complicated tech or extra devices needed.
            </p>
            <a
              href="#feature1"
              className="mt-4 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Feature 2: Automated Collection */}
          <div className="flex flex-col items-start">
            <div className="mb-4 rounded-full bg-gray-100 p-3">
              <Settings className="text-gray-700 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Automated Collection</h3>
            <p className="mt-2 text-gray-600">
              Reviews flow directly to your Google business listing, and customer details (with consent) go into your
              database.
            </p>
            <a
              href="#feature2"
              className="mt-4 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          {/* Feature 3: Boost Engagement */}
          <div className="flex flex-col items-start">
            <div className="mb-4 rounded-full bg-gray-100 p-3">
              <Lock className="text-gray-700 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Boost Engagement</h3>
            <p className="mt-2 text-gray-600">
              Use collected data for targeted marketing campaigns, with analytics to track results and refine strategies.
            </p>
            <a
              href="#feature3"
              className="mt-4 flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RapidReviewsSection;