"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Section from "@/components/section/section";

interface AccordionItemProps {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem = ({
  id,
  title,
  content,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Trigger Button */}
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300 focus:outline-none"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="text-gray-500 dark:text-gray-400"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>

      {/* Animated Content Wrapper */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-4 pr-12 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQS() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      title: "When will the website be complete?",
      content: "Soon.",
    },
    {
      id: 2,
      title: "Is this an actual club?",
      content: "Hopefully yes.",
    },
  ];

  return (
    <Section noBackground>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-6">
          FAQ
        </h2>

        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            id={faq.id}
            title={faq.title}
            content={faq.content}
            isOpen={openId === faq.id}
            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
          />
        ))}
      </div>
    </Section>
  );
}
