"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/app/lib/hooks";
import { useActiveSectionContext } from "@/app/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >

{/**
         * 
         * As a software engineer with over 5 years of experience,
         *  I have a diverse skill set and extensive knowledge in backend, frontend, and mobile development. 
         * My expertise includes working with top-notch technologies such 
         * as ASP.NET, Angular, Android, Swift, Kotlin, Java, and C# specifically
         *  within the fintech industry. Currently, I am utilizing my skills to 
         * develop cutting-edge mobile applications for clients in the US. With a proven track record
         *  of delivering high-quality solutions and staying up-to-date with the latest industry trends, 
         * I am confident in my ability to create impactful software that meets your business needs. Let's
         *  connect and discuss how I can contribute to your success as a software engineer.
         * 
         */}


        <span className="font-bold">Hello 👋, I&apos;m Otto.</span> I&apos;m a{" "}
        <span className="font-bold">Software engineer</span> with{" "}
        <span className="font-bold">5+ years</span> of experience, I have a diverse skill set and knowledge in backend, frontend, and mobile development.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/otto-francisco-chamo-cheley-704511150/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ochamodev"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
