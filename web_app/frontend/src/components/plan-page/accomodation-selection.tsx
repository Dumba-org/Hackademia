/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
    FaBook,
    FaRegMinusSquare
} from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";
import { RiVipFill } from "react-icons/ri";

const options = [
  {
    icon: <FaRegMinusSquare />,
    name: "Basic",
  },
  {
    icon: <RiVipFill />,
    name: "Luxury",
  },
  {
    icon: <GiCampCookingPot />,
    name: "Camping",
  },
  {
    icon: <FaBook />,
    name: "Self-Book",
  },
];

export default function AccomodationSelection() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const selectedOptionData = options.find(
    (option) => option.name === selectedOption,
  );

  return (
    <div className="p-2 lg:p-4">
      <h2 className="mb-4 text-center text-base font-bold md:text-xl lg:text-2xl">
        Choose your Package
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
        {options.map((option) => (
          <div
            key={option.name}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-lg p-4 shadow-lg transition-colors duration-300 ease-in-out ${
              selectedOption === option.name
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => handleOptionClick(option.name)}
          >
            <span
              className={`text-xl lg:text-4xl ${
                selectedOption === option.name ? "text-white" : "text-primary"
              }`}
            >
              {option.icon}
            </span>
            <hr className="my-2 w-full border-gray-300" />
            <span className="text-sm md:text-base">{option.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {selectedOptionData && <div className="mt-8 text-center">content</div>}
      </div>
    </div>
  );
}
