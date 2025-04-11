import React from "react";

const Card = ({ title, description, icon, isHighlighted, className }) => {
  return (
    <div className={`card-div `}>
      <div
        className={`box p-6 rounded-2xl  w-80 text-center ${
          isHighlighted ? "bg-orange-500 text-white border" : " text-black"
        } ${className}`}
      >
        <div className="content">
          <h3 className="text-xl font-bold">{title}</h3>
          <p
            className={`mt-2 ${isHighlighted ? "text-white" : "text-gray-600"}`}
          >
            {description}
          </p>
        </div>
        <div className="icon text-4xl">{icon}</div>
      </div>
    </div>
  );
};

export default function CardTrial() {
  return (
    <div className="containercard flex flex-col items-center space-y-6 md:flex-row md:space-x-6 md:space-y-0">
      <Card
        title="Efficiency and Automation"
        description="Automate tasks to save time and reduce manual work."
        icon="⚙️"
      />
      <Card
        title="Seamless Communication"
        description="Keep teachers, parents, and students connected in real time."
        icon="💬"
        isHighlighted
      />
      <Card
        title="All-In-One Management"
        description="Handle student records, attendance, grading, and finances in one platform."
        icon="📊"
      />
    </div>
  );
}
