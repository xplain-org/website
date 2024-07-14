"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 8, // Scale up when hovered
      transition: {
        duration: 1, // Duration of the scale animation
        ease: "easeInOut",
      },
    },
    animate: {
      top: ["0%", "0%", "100%", "100%", "0%"],
      left: ["0%", "100%", "100%", "0%", "0%"],
      transition: {
        duration: 4,
        ease: "linear",
        // times: [0, 0.5, 0.5, 0.5, ],
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.button
      className="relative  w-[158px] h-[58px] rounded-full overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ x: "20vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.5,
        duration: 1,
        type: "linear",
        // stiffness: 120,
      }}
    >
      <motion.div
        className="bg-[#2C2C2C] w-full h-full "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{
          duration: 1,
          type: "linear",
        }}
      ></motion.div>
      <motion.div
        id="glow-button"
        className={`rounded-full absolute  `}
        variants={variants}
        animate={hovered ? "hover" : "animate"}
        // animate="animate"
      />
      <div className="bg-black w-[154px] h-[54px] rounded-full absolute text-white flex items-center justify-center">
        Book a call
      </div>
    </motion.button>
  );
};

const Navbar = () => {
  return (
    <motion.div
      className="w-full flex justify-between max-w-[1360px]  items-center  p-[24px]"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1,
          type: "linear",
        },
      }}
    >
      {/* <h1 className="text-white">LOGO</h1> */}
      <motion.img
        src="/logo.svg"
        alt="LOGO"
        className="text-white"
        initial={{ x: "-20vw", opacity: 0 }} // Start off the screen to the right
        animate={{ x: 0, opacity: 1 }} // Animate to its original position
        transition={{
          delay: 0.5,
          duration: 1,
          type: "linear",
          // stiffness: 120,
        }}
      />
      <nav className="hidden 2xl:flex  rounded-full border-2 border-[#2C2C2C] p-2 ">
        <div className="flex group hover:cursor-pointer flex-row items-center w-[103px] h-[44px] justify-center  gap-2 rounded-full hover:border-2 hover:border-[#2C2C2C]">
          <div className="h-[6px] w-[6px] bg-[#999999] rounded-full group-hover:bg-[#A7F10C] "></div>
          <a
            href="#process"
            className="text-[#999999] group-hover:text-white font-medium text-xs"
          >
            Process
          </a>
        </div>
        <div className="flex group flex-row items-center  hover:cursor-pointer justify-center   w-[103px] h-[44px] gap-2 rounded-full hover:border-2 hover:border-[#2C2C2C]">
          <div className="h-[6px] w-[6px] bg-[#999999] rounded-full  group-hover:bg-[#A7F10C]"></div>
          <a
            href="#process"
            className="text-[#999999] group-hover:text-white font-medium text-xs"
          >
            Works
          </a>
        </div>
        <div className="flex flex-row group items-center justify-center  hover:cursor-pointer w-[103px] h-[44px] gap-2 rounded-full hover:border-2 hover:border-[#2C2C2C]">
          <div className="h-[6px] w-[6px] bg-[#999999] rounded-full group-hover:bg-[#A7F10C]"></div>
          <a
            href="#process"
            className="text-[#999999] group-hover:text-white font-medium text-xs "
          >
            Services
          </a>
        </div>
        <div className="flex flex-row group items-center justify-center   hover:cursor-pointer w-[103px] h-[44px] gap-2 rounded-full hover:border-2 hover:border-[#2C2C2C]">
          <div className="h-[6px] w-[6px] bg-[#999999] rounded-full group-hover:bg-[#A7F10C]"></div>
          <a
            href="#process"
            className="text-[#999999] group-hover:text-white font-medium text-xs"
          >
            Pricing
          </a>
        </div>
        <div className="flex group flex-row items-center justify-center hover:cursor-pointer w-[103px] h-[44px] gap-2 rounded-full hover:border-2 hover:border-[#2C2C2C]">
          <div className="h-[6px] w-[6px] bg-[#999999] rounded-full group-hover:bg-[#A7F10C]"></div>
          <a
            href="#process"
            className="text-[#999999] group-hover:text-white font-medium text-xs"
          >
            Contact
          </a>
        </div>
      </nav>
      <AnimatedButton />
    </motion.div>
  );
};

export default Navbar;
