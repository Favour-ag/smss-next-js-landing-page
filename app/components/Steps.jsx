"use client";

import Image from "next/image";

const Steps = () => {
  return (
    <section className="py-12 px-6 md:px-12 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold">
        <span className="text-[#F97314]">Get started</span> with these three
        easy steps
      </h2>

      {/* Description */}
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Simplify school management with SMSS—your all-in-one solution for
        seamless administration, communication, and organization.
      </p>

      {/* Subtext with Emoji */}
      <p className="mt-2 text-gray-600">
        Join today and take the first step toward smarter school management!
      </p>

      {/* Steps Container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="bg-[#FDF3EC] p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image src="/signup.svg" alt="Sign-Up" width={100} height={100} />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Sign-Up</h3>
          <p className="text-gray-600 mt-2">
            Register your school and set up your profile
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#FDF3EC] p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image
              src="/customize.svg"
              alt="Customize"
              width={100}
              height={100}
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Customize</h3>
          <p className="text-gray-600 mt-2">
            Add students, teachers, and parents with ease
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-[#FDF3EC] p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center">
            <Image src="/manage.svg" alt="Manage" width={100} height={100} />
          </div>
          <h3 className="mt-4 text-xl font-semibold">Manage</h3>
          <p className="text-gray-600 mt-2">
            Use SMSS tools to track attendance and grading
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
