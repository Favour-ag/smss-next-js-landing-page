import Image from "next/image";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#F973141A] p-6 rounded-lg shadow-lg relative">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>
      {/* Arrow Button */}
      <div className="absolute bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full">
        ➜
      </div>
    </div>
  );
};

export default FeatureCard;
