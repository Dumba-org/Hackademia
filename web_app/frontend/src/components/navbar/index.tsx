"use client";

import Link from "next/link";
import { InfoBar } from "./info-bar";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useOverflowDetection } from "@/hooks/use-overflow-detection";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { LazyMotion, m, domMax, AnimatePresence } from "framer-motion";
export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    if (window) {
      setScrollY(window.scrollY);
    }
  }, []);
  const scrollFn = (e: Event) => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFn);
    return () => window.removeEventListener("scroll", scrollFn);
  }, []);

  return (
    <LazyMotion features={domMax}>
      <m.div
        className={cn("fixed top-0 z-50 w-full pb-4 shadow-lg")}
        initial={{
          opacity: 1,
          y: 0,
          backgroundColor: "transparent",
          boxShadow: "none",
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
      >
        <div className="flex w-full flex-col">
          <InfoBar scrollY={scrollY} />
        </div>
      </m.div>
    </LazyMotion>
  );
};