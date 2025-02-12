"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, domMax, LazyMotion } from "framer-motion";

export default function WhatWeDo() {
  const scrollRef = useRef(null);
  return (
    <LazyMotion features={domMax}>
      <section className="container overflow-hidden py-8 lg:py-16">
        <div className="grid items-center gap-4 lg:grid-cols-2 lg:gap-8">
          {/* Image Section */}
          <m.div
            initial={{ opacity: 0, x: "-10%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="What We Do"
              width={400}
              height={300}
            />
          </m.div>

          {/* Text Section */}
          <m.div
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <h2 className="comp-heading mb-4 text-base md:text-xl lg:text-2xl xl:text-3xl">What We Do</h2>
            <p className="comp-subheading mb-6 text-base lg:text-xl">
              At CSIT Baba, we empower learners by providing comprehensive,
              high-quality, and accessible resources in Computer Science. Our
              platform is designed to guide you through your journey, whether
              you're a beginner or an advanced learner. Dive into our vast
              library of courses and start learning today!
            </p>
            <p className="flex w-fit justify-center lg:justify-start">
              <Link
                href="/learn-more"
                className="inline-block w-fit rounded-full border border-black px-4 py-2 text-sm font-semibold text-black transition md:text-base"
              >
                Learn More
              </Link>
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
