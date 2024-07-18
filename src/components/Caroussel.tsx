// LazyLoadedDiv.tsx
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { transform } from "next/dist/build/swc";
// import
const images = [
  "./1.png",
  "./2.png",
  "./3.png",
  "./4.png",
  "./5.png",
  "./6.png",
  "./7.png",
  "./8.png",
  "./9.png",
  // Add more image URLs as needed
];

// const doubledImages = [...images, ...images];

const Caroussell = () => {
  const [offset, setOffset] = useState(0);
  const animationFrameRef = useRef();
  const startTimeRef = useRef();
  const doubledImages = [...images, ...images]; // Assuming 'images' is defined elsewhere

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsedTime = timestamp - startTimeRef.current;

    // Calculate new position based on elapsed time
    // Adjust speed as necessary
    const speed = 0.05; // Speed of the animation
    const newPosition = (elapsedTime * speed) % window.innerWidth;

    setOffset(-newPosition);

    // Loop the animation
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="overflow-hidden  whitespace-nowrap  w-[130vw]"
      initial={{
        rotate: 0,
        rotateY: 0,
        rotateX: 45,
        translateZ: 0,
      }}
      animate={{
        rotate: -25,
        rotateY: 20, // Adjust for a horizontal 3D rotation
        rotateX: 50, // Adjust for a vertical 3D rotation
        translateZ: 0, // Move the element in 3D space for depth
      }}
      transition={{
        // delay: 2,
        type: "linear",
        // stiffness: 100,
      }}
    >
      <motion.div
        style={{
          transform: `translateX(${offset}px)`,
          willChange: "transform",
        }}
        className="flex h-[600px] gap-4 "
        // initial={{
        //   rotate: 0,
        // }}
      >
        {doubledImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index}`}
            className="rounded-xl"
            style={{ width: "600px  ", height: "100%" }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Caroussell;
