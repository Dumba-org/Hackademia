"use client";
import Image from "next/image";
import bgImage from "/public/images/home-bg-1.png";
import cloudImage from "/public/images/cloud.png";
import lhotseImage from "/public/images/lhotse.png";
import climberImage from "/public/images/climber-bg.png";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { socialIcons } from "@/config/constants";

import { m, domMax, LazyMotion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "../ui/background-with-beams";
import { AuroraBackground } from "../ui/aurora-background";
export function HeroSection() {
  return (
    <AuroraBackground className="md:h-[calc(100vh-var(--navbar-height))]">
      <LazyMotion features={domMax}>
        <m.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container relative flex flex-col items-center justify-center gap-4 px-4"
        >
          <div className="text-center text-3xl font-bold dark:text-white md:text-3xl lg:text-4xl xl:text-7xl">
            Welcome to CSIT Baba
          </div>
          <div className="py-4 text-base font-extralight dark:text-neutral-200 md:text-xl lg:text-3xl">
            - Your Ultimate Guide in Computer Science!
          </div>
          <Button className="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
            Learn now
          </Button>
        </m.div>
      </LazyMotion>
    </AuroraBackground>
  );
}
