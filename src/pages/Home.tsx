import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import OurCustomers from "../components/OurCustomers";
import RapidReviewsSection from "../components/RapidReviewsSection";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import AddOns from "../components/Addons";
import Testimonials from "../components/Testinomials";
import FAQSection from "../components/FAQSection";
import SignUpSection from "../components/SignupSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <OurCustomers />
      <RapidReviewsSection />
      <Features />
      <Pricing />
      <AddOns />
      <Testimonials />
      <FAQSection />
      <SignUpSection />
      <Footer />
    </div>
  );
};

export default Home;