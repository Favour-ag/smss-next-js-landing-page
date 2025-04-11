"use client";

import Image from "next/image";
import { FaClock, FaChartLine, FaLaptopCode, FaComments } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const features = [
  {
    title: "Saves Time & Effort",
    description: "Automates administrative tasks, while reducing manual work.",
    bgColor: "bg-orange-500 text-white",
    icon: <FaClock className="text-3xl text-white" />,
  },
  {
    title: "Smart Insights",
    description: "Generates reports for performance insights.",
    bgColor: "bg-orange-100 text-gray-900",
    icon: <FaChartLine className="text-3xl text-orange-500" />,
  },
  {
    title: "Flexible Learning",
    description: "Online tools for flexible education model.",
    bgColor: "bg-orange-100 text-gray-900",
    icon: <FaLaptopCode className="text-3xl text-orange-500" />,
  },
  {
    title: "Communication",
    description: "Strengthens student, parents, and teachers engagement.",
    bgColor: "bg-orange-500 text-white",
    icon: <FaComments className="text-3xl text-white" />,
  },
];

export default function SmssAdvantage() {
  return (
    <section className="py-12 px-6 md:px-16 relative overflow-hidden">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-2">
        {/* Left Section - Text & Features */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The <span className="text-orange-500">SMSS</span> Advantage
          </h2>
          <p className="text-gray-600 mt-2">
            The Powerful All-in-One Solution for Schools, Teachers, and Parents
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center md:relative absolute -right-8 bottom-0">
          <Image
            src="/ipadmini.svg"
            alt="SMSS 3D Card"
            width={500}
            height={400}
            className="w-auto max-w-xs md:max-w-md "
          />
        </div>
      </div>
    </section>
  );
}

// FeatureCard Component
const FeatureCard = ({ title, description, bgColor, icon }) => {
  return (
    <div className={`p-6 rounded-xl shadow-lg ${bgColor}`}>
      <div className="flex items-center space-x-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm">{description}</p>
      <div className="mt-4 flex justify-end">
        <BsArrowRight className="text-2xl" />
      </div>
    </div>
  );
};
