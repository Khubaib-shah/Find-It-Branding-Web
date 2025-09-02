import React from "react";

const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <h2
      className={`font-semibold leading-7 text-xl sm:text-3xl lg:text-4xl tracking-tighter md:tracking-tight ${
        className || ""
      }`}
    >
      {title}
    </h2>
  );
};

export default Title;
