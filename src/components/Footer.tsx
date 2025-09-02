"use client";
import React from "react";
import Brand from "./Brand";
import { footer_links } from "@/Constant";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { handleScroll } from "@/utils";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0"
      >
        <Brand />

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center md:justify-start gap-4 text-center"
        >
          {footer_links.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-black/70 font-semibold tracking-wider hover:text-black transition"
            >
              <Link
                href={link.url}
                scroll={false}
                onClick={(e) =>
                  handleScroll(
                    e,
                    link.url === "/" ? "/" : link.url.replace("#", "")
                  )
                }
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <Image src={"/linkedIn.png"} alt="LinkedIn" width={30} height={30} />
          <Image
            src={"/instagram.png"}
            alt="Instagram"
            width={30}
            height={30}
          />
        </motion.div>
      </motion.div>

      <hr className="my-6 border-black/20" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left font-semibold text-black/50 gap-2 mb-7"
      >
        <span>@2025 All Rights Reserved</span>
        <span className="cursor-pointer hover:text-black">
          Terms and Privacy
        </span>
      </motion.p>
    </footer>
  );
};

export default Footer;
