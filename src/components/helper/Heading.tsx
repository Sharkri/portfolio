import { ReactNode } from "react";
import { motion } from "framer-motion";

function Heading({ children, id }: { children: ReactNode; id: string }) {
  return (
    <motion.h1
      initial={{
        filter: "blur(25px)",
        opacity: 0,
        y: -70,
      }}
      whileInView={{
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 24,
        mass: 2,
      }}
      id={id}
      className="text-white font-bold text-3xl"
    >
      {children}
    </motion.h1>
  );
}

export default Heading;
