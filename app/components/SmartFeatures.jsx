import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Student Management System",
    description:
      "Centralizes records, tracks attendance, and automates grading.",
    image: "/images/student-management.jpg",
  },
  {
    title: "Smart Scheduling And Timetable",
    description:
      "Centralizes records, tracks attendance, and automates grading.",
    image: "/images/scheduling.jpg",
  },
  {
    title: "Learning And Resource Management",
    description:
      "Centralizes records, tracks attendance, and automates grading.",
    image: "/images/learning.jpg",
  },
];

const SmartFeatures = () => {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Smart Features For Seamless Management
      </h2>
      <p className="text-gray-600 mt-4">
        Explore the smart tools designed to simplify and streamline school
        management effortlessly.
      </p>

      {/* Feature Cards */}
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>

      {/* Explore Button */}
      <div className="mt-10">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
          Explore Features
        </button>
      </div>
    </section>
  );
};

export default SmartFeatures;
