import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function IntroAnimation({ onfinish }) {
  const greet = useMemo(
    () => [
      "Hello", "Salam", "Hola", "Bonjour", "Ciao", "Olá", 
      "Здравствуйте", "Merhaba", "Γειά", "Hej", "Hallo", "नमस्ते"
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // If we haven't reached the last word, advance the index
    if (index < greet.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 180);
      return () => clearTimeout(timeout);
    } 
    // If we are at the last word, wait a moment, then trigger the exit
    else {
      const timeout = setTimeout(() => setVisible(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, greet.length]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onfinish}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex justify-center items-center text-white overflow-hidden"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <motion.h1
            key={index} // This ensures the animation plays every time the text changes
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.12 }}
          >
            {greet[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}