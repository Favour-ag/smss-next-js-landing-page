import Features from "./Features";

const Hero = () => {
  return (
    <section
      className="relative h-[500px] md:min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center px-6"
      style={{ backgroundImage: "url('/hero-bg.svg')" }}
    >
      {/* Overlay for dark tint effect */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 space-y-4 ">
        {/* Main Hero Content */}
        <h1 className="text-3xl md:text-[64px] font-medium text-black md:leading-snug">
          Smart, Simple, Seamless <br /> School Management
        </h1>
        <p className="text-black text-lg md:text-[24px] md:mx-12 font-light">
          Say goodbye to paperwork and administrative stress! SSMS simplifies
          attendance tracking, grading, and communication—giving schools,
          teachers, parents, and students a seamless digital experience.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 space-x-4">
          <button className="bg-[#F97314] hover:bg-orange-500 text-white px-6 py-3 rounded-md shadow-md  transition">
            Get Started
          </button>
          <button className="border border-[#F97314] text-[#F97314] px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white transition">
            Explore Features
          </button>
        </div>
      </div>
      <Features />
    </section>
  );
};

export default Hero;
