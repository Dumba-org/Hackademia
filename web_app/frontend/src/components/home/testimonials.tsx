"use client";
import Image from "next/image";
import testimonialImg from "/public/images/whyus/whyusMan.png";
import { m, domMax, LazyMotion } from "framer-motion";
const testimonials = [
  {
    name: "Abin Shrestha",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: testimonialImg,
  },
  {
    name: "Hello world",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: testimonialImg,
  },
  {
    name: "Nepal Parmila",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    image: testimonialImg,
  },
];

export default function Testimonials() {
  return (
    <LazyMotion features={domMax}>
      <m.section
        initial={{ opacity: 0, y: "-10%" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.6 }}
        className="py-8 lg:py-16"
      >
        <div className="container">
          {/* Heading */}
          <div className="flex lg:justify-center lg:text-center">
            <div className="lg:max-w-2xl">
              <h2 className="comp-heading mb-4 text-base md:text-xl lg:text-2xl xl:text-3xl">
                Testimonials
              </h2>
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0 lg:mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative flex w-full justify-center ${
                  index !== testimonials.length - 1 ? "md:border-r-0" : ""
                }`}
              >
                <div
                  className={`${
                    index !== testimonials.length - 1
                      ? "before:absolute before:bottom-0 before:right-0 before:top-0 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent md:before:w-[2px]"
                      : ""
                  } px-8 text-center`}
                >
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-auto object-cover grayscale"
                    />
                  </div>
                  <p className="mt-4 text-base font-normal text-gray-600 lg:text-lg">
                    {testimonial.message}
                  </p>
                  <p className="mt-2 text-lg font-bold lg:text-[20px]">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
}
