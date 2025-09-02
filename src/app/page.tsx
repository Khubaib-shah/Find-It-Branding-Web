import React from "react";
import Hero from "../section/Hero";
import Exclusive from "@/section/Exclusive";
import SimpleSteps from "@/section/SimpleSteps";
import Testimonials from "@/section/Testimonials";
import DownloadApp from "@/section/DownloadApp";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <main className="container mx-auto min-h-screen w-full  text-gray-900">
      <div className="px-4 lg:px-8">
        <Hero />
        <Exclusive />
        <SimpleSteps />
        <Testimonials />
        <DownloadApp />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
