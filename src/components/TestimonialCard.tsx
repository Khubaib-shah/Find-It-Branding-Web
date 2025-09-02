import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  rating: number;
  feedback: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  feedback,
  avatar,
}) => {
  return (
    <div className="bg-white  min-w-[267px] max-w-[267px] h-[307px]  rounded-xl shadow-lg mb-8 p-6 flex flex-col items-center text-center shadow-bottom-2xl">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden mb-3.5">
        <Image src={avatar} alt={name} width={92} height={92} />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2.5">
        <Image
          src="/Star.png"
          alt="star"
          width={20}
          height={20}
          className="size-6 object-contain"
        />
        <span className="font-semibold text-gray-800">{rating.toFixed(2)}</span>
      </div>

      {/* Name */}
      <h3 className="font-semibold text-lg text-[#646464]">{name}</h3>

      {/* Feedback */}
      <p className="text-lg text-[#8C8C8C] mt-2.5">{feedback}</p>
    </div>
  );
};

export default TestimonialCard;
