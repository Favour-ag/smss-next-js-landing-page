"use client";

import Image from "next/image";

const Features = () => {
  return (
    <section className="text-center px-12 absolute top-[360px] md:top-[500px]">
      {/* Features Grid */}
      <div className="mt-20 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 md:px-6 pr-24">
        {/* Cloud-Based Access */}
        <div className="bg-[#F97314] opacity-80 p-6 rounded-lg shadow-md text-white flex flex-col items-center w-[400px] h-[300px]">
          <Image
            src="/vector.svg"
            alt="Cloud Access"
            width={100}
            height={100}
          />
          <h3 className="mt-4 text-2xl font-semibold">Cloud-Based Access</h3>
          <p className="mt-2 text-white text-[16px]">
            Secure login from anywhere for students, parents, and staff.
          </p>
        </div>

        {/* Multi-School System */}
        <div className="bg-[#F97314] opacity-80 p-6 rounded-lg shadow-md text-white flex flex-col items-center w-[400px] h-[300px]">
          <Image
            src="/terminal-window-fill.svg"
            alt="Multi-School System"
            width={100}
            height={100}
          />
          <h3 className="mt-4 text-2xl font-semibold">Multi-School System</h3>
          <p className="mt-2 text-white text-[16px]">
            Manage multiple school branches from one platform.
          </p>
        </div>

        {/* Customized Dashboard */}
        <div className="bg-[#F97314] opacity-80 p-6 rounded-lg shadow-md text-white flex flex-col items-center w-[400px] h-[300px]">
          <Image
            src="/macbook-fill.svg"
            alt="Dashboard"
            width={100}
            height={100}
          />
          <h3 className="mt-4 text-2xl font-semibold">Customized Dashboard</h3>
          <p className="mt-2 text-white text-[16px]">
            Personalize features based on school needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
