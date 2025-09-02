import { MouseEvent } from "react";

export const handleScroll = (
  e: MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();

  if (targetId === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const section = document.getElementById(targetId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
