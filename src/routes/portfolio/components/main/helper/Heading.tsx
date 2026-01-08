import { ReactNode } from "react";
import { motion } from "framer-motion";

function Heading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <>
      <motion.h1
        initial={{
          filter: "blur(18px)",
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 87,
          damping: 24,
          mass: 2,
        }}
        viewport={{ once: true, margin: "-50px" }}
        id={id}
        className="font-bold sm:text-3xl text-2xl"
      >
        {children}
      </motion.h1>
      <div className="border-b border-b-white/50 my-5 sm:my-7" />
    </>
  );
}

export default Heading;
