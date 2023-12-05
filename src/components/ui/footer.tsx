"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Twitter, YoutubeIcon } from "lucide-react";
import { DiscordLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const iconVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2 },
};

export function Footer() {
  return (
    <footer
      data-aos="fade-up"
      className="flex flex-col items-center justify-center bg-palette-1 py-8 text-black dark:text-white mt-10"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4 pb-8 pt-4 md:gap-10">
          <Image src="/logo.png" width={100} height={20} alt="" />
          <a href="">
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Twitter className="text-xl md:text-3xl" />
            </motion.div>
          </a>
          <a href="">
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <DiscordLogoIcon className="text-xl md:text-3xl" />
            </motion.div>
          </a>
          <a href="">
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <LinkedInLogoIcon className="text-xl md:text-3xl" />
            </motion.div>
          </a>
          <a href="">
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Instagram className="text-xl md:text-3xl" />
            </motion.div>
          </a>
          <a href="">
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <YoutubeIcon className="text-xl md:text-3xl" />
            </motion.div>
          </a>
        </div>
        <p className="text-center text-sm">
          © 2023 Telecall, Telecall AND ANY ASSOCIATED LOGO ARE TRADEMARKS,
          TRADEMARKS OF SERVICE <br /> AND/OR Telecall TRADEMARKS.
          <span className="font-bold"> CNPJ: 41.941.811/0001-74</span>
        </p>
        <div className="flex flex-col items-center justify-center gap-6 pt-4">
          <p>© 2023 Telecall | All rights reserved</p>
          <div className="flex gap-8">
            <a href="" className="border-b border-palette-2 text-xs">
              Privacy Policy
            </a>
            <a href="" className="border-b border-palette-2 text-xs">
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
