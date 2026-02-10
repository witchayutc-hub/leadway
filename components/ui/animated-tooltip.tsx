"use client";

import { motion, AnimatePresence } from "motion/react";

type Item = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function AnimatedTooltip({
  active,
  item,
}: {
  active: boolean;
  item: Item;
}) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute left-1/2 top-full z-40 mt-3 -translate-x-1/2 w-[45vw] max-w-sm overflow-hidden rounded-xl shadow-xl bg-white
            sm:max-w-md
            md:max-w-lg"
        >
          <img
            src={item.image}
            alt={item.title}
            className="block h-40 w-full object-cover
              sm:h-44
              md:h-52"
          />
          <div className="p-4 text-start sm:p-5 md:p-6">
            <span className="block text-base sm:text-lg md:text-xl text-gray-900">
              {item.title}
            </span>

            <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-gray-600">
              {item.description}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
