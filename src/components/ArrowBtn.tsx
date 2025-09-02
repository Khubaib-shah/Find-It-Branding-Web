import Image from "next/image";
import React from "react";
import ArrowImg from "../../public/Arrow.png";
import { handleScroll } from "@/utils";
import Link from "next/link";

interface ArrowBtnProps {
  url: string;
}

const ArrowBtn: React.FC<ArrowBtnProps> = ({ url }) => {
  return (
    <Link
      href={url}
      onClick={(e) => handleScroll(e, url)}
      className="p-2 rounded-full bg-[#8E8E8E] max-w-16 min-w-14 min-h-14"
    >
      <Image
        src={ArrowImg}
        alt="Arrow"
        width={100}
        height={100}
        className="object-contain"
      />
    </Link>
  );
};

export default ArrowBtn;
