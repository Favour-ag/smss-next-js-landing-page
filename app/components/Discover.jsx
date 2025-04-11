import Image from "next/image";

const DiscoverSSMS = () => {
  return (
    <section className="min-h-screen container mx-auto  flex flex-col md:flex-row items-center gap-8 mt-[950px] md:mt-56">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/ipadpro.svg"
          alt="SSMS Dashboard"
          width={600}
          height={400}
          className=""
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-justify px-8 md:px-12">
        <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
          Discover SSMS
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Picture a school where teachers don’t have to chase down attendance
          sheets, parents receive instant progress updates, and administrators
          manage everything with just a few clicks. That’s the power of SSMS.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Our platform simplifies school operations, making daily tasks
          effortless and communication seamless. Whether it’s managing student
          records, sending fee reminders, or tracking academic performance, SSMS
          does it all in one place.
        </p>
        <button className="bg-[#F97314] hover:bg-orange-500 text-white px-4 py-2 rounded-md mt-4">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default DiscoverSSMS;
