"use client";
import Image from "next/image";
import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";

// const Navbar = lazy(() => import("@components/Navbar"));
// const Caroussel = lazy(() => import("@components/Caroussel"));
import Navbar from "@/components/Navbar";

//observer design pattern
class MouseMovementObserver {
  constructor() {
    this.observers = [];
    document.addEventListener("mousemove", this.notifyObservers.bind(this));
  }

  observers: ((event: MouseEvent) => void)[] = [];

  subscribe(fn: (event: MouseEvent) => void) {
    this.observers.push(fn);
  }

  unsubscribe(fn: (event: MouseEvent) => void) {
    this.observers = this.observers.filter((observer) => observer !== fn);
  }

  notifyObservers(event: MouseEvent) {
    this.observers.forEach((observer) => observer(event));
  }
}

// Create a single instance of the observer

interface GlowDotProps {
  position: {
    x: number;
    y: number;
  };
}

const GlowDot: React.FC<GlowDotProps> = ({ position }) => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePosition = () => {
      if (dotRef.current) {
        dotRef.current.style.top = position.y + 20 + "px";
        dotRef.current.style.left = position.x + 38 + "px";
      }
    };

    const animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <motion.div
      ref={dotRef}
      style={{
        position: "absolute",
        // transition: 'top 0.1s ease, left 0.1s ease',
      }}
      transition={{ type: "spring", stiffness: 500, damping: 10 }}
      id="glow-dot"
    />
  );
};

// export default GlowDot;

export default function Home() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  const images = [
    "/test.PNG",

    // Add more image URLs as needed
  ];

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMovementObserver = new MouseMovementObserver();

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    mouseMovementObserver.subscribe(updatePosition);

    return () => {
      mouseMovementObserver.unsubscribe(updatePosition);
    };
  }, []);

  return (
    <>
      {/* <GlowDot position={position} /> */}
      <main className="flex min-h-screen flex-col items-center ">
        <Suspense fallback={<div className="h-[112px] "></div>}>
          <Navbar />
        </Suspense>
        <div className="relative flex flex-col justify-center items-center  z-20 w-[600px]  overflow-hidden">
          <motion.h1
            style={{ willChange: "transform" }}
            className="text-[15vw] text-white font-bold shadow-lg tracking-wide shadow-lg font-outfit  "
            initial={{
              opacity: 0,
              scale: 0.7,
              // display: "none",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              // display: "",
            }}
            transition={{
              duration: 1,
              type: "linear",
            }}
          >
            xplain
          </motion.h1>
          <motion.p
            style={{ willChange: "transform" }}
            className="text-2xl text-white font-bold  font-outfit "
            initial={{
              y: "15vh",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "linear",
            }}
          >
            Developement Studio
          </motion.p>
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Caroussel />
        </Suspense> */}
        <div className=" w-[1080px] h-[500px] bg-white"></div>
      </main>
    </>
  );
}
