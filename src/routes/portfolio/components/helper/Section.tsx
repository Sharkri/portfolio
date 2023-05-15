import { motion } from "framer-motion";
import { ReactNode } from "react";
import Heading from "./Heading";

function Section({
  children,
  headingText,
  headingId,
  className,
}: {
  children: ReactNode;
  headingText: string;
  headingId: string;
  className?: string;
}) {
  return (
    <section>
      <Heading id={headingId}>{headingText}</Heading>

      <motion.div
        initial={{
          filter: "blur(2px)",
          opacity: 0,
        }}
        whileInView={{
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 24,
          mass: 2,
        }}
        viewport={{ once: true }}
        className={className}
      >
        {children}
      </motion.div>
    </section>
  );
}

Section.defaultProps = {
  className: "",
};

export default Section;
