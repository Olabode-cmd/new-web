import React, { useState, useEffect, useRef } from 'react';
import Hero from "/hero-olabode.JPG?url";
import CountUp from 'react-countup';

import AOS from "aos";
import "aos/dist/aos.css";

import GetInTouchSection from './components/getintouch';

// IMAGES
import DFI from './assets/images/brands/dfi.png'
import Abinci from './assets/images/brands/abinci.jpeg'
import Eyekandy from './assets/images/brands/eyekandy.png'
import Finaflex from './assets/images/brands/finaflex.png'
import Foodpreneur from './assets/images/brands/foodpreneur.png'
import FreshMclean from './assets/images/brands/freshmclean.png'
import Tita from './assets/images/brands/tita.png'
import Wigscastle from './assets/images/brands/wigscastle.png'

const PortfolioCard = ({ item }) => {
  const { title, link, image, description, stacks } = item;

  return (
    <div className="group overflow-hidden rounded-xl" data-aos="fade-up">
      {/* Image Container */}
      <a
        href={link}
        target="_blank"
        className="relative h-64 md:h-80 overflow-hidden rounded-xl inline-block"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Optional hover content */}
        </div>
      </a>

      {/* Content */}
      <div className="mt-4">
        {/* Title with arrow */}
        <div className="flex items-center mb-2">
          <h3 className="text-2xl font-bold">
            <a
              href={link}
              target="_blank"
              className="hover:text-purple-400 transition-colors"
            >
              {title}
            </a>
          </h3>
        </div>

        <p className="mt-4 text-gray-400">{description}</p>

        {/* Stacks used - displayed as chips/tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {stacks.map((stack, index) => (
            <span
              key={index}
              className="inline-block bg-gray-800 rounded-full px-3 py-1 text-xs text-gray-300"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const portfolioItems = [
    {
      id: 1,
      title: "Digital Fortress Institute",
      link: "https://dfi-bode-dev.vercel.app/",
      image: DFI,
      description: "The official landing page of Digital Fortress Institute.",
      stacks: ["React", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Abinci",
      link: "https://abinci.co",
      image: Abinci,
      description:
        "Abinci is a food delivery platform with users, vendors, and riders all on the app.",
      stacks: ["React", "Typescript", "TailwindCSS"],
    },
    {
      id: 3,
      title: "WigsCastle",
      link: "https://wigscastle.netlify.app/",
      image: Wigscastle,
      description: "A simple website design for a wig merchandise brand.",
      stacks: ["HTML5", "Bootstrap", "jQuery"],
    },
    {
      id: 4,
      title: "FreshMclean",
      link: "https://www.freshmclean.com/",
      image: FreshMclean,
      description:
        "FreshMclean is a booking platform for users who need cleaning services. Cleaners can also register.",
      stacks: ["React", "TailwindCSS"],
    },
    {
      id: 5,
      title: "Finaflex",
      link: "https://finaflex.netlify.app/",
      image: Finaflex,
      description:
        "Finaflex is a collboration tool for business that offer a range of features.",
      stacks: ["HTML5", "TailwindCSS"],
    },
    {
      id: 6,
      title: "EyeKandy",
      link: "https://eyekandyng.com/",
      image: Eyekandy,
      description:
        "Eyekandy is a clinic and this website allows users to book appointments online.",
      stacks: ["HTML5", "Bootstrap", "PHP"],
    },
    {
      id: 7,
      title: "Tita",
      link: "https://titabuild.netlify.app/",
      image: Tita,
      description:
        "Tita is a payment solutions platform for businesses and they offer a few more features.",
      stacks: ["HTML5", "Bootstrap", "jQuery"],
    },
    {
      id: 8,
      title: "Foodpreneur Hub",
      link: "https://foodpreneur.netlify.app/",
      image: Foodpreneur,
      description: "Foodpreneur Hub is a culinary courses platform for people who want to learn.",
      stacks: ["HTML5", "Bootstrap", "Javascript"],
    },
  ];

  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  // Track mouse position when hovering over the text
  const handleMouseMove = (e) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  // Show/hide the hover image
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Animate on scroll
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="bg-black">
      <div className="text-white min-h-screen max-w-7xl mx-auto">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4">
          <div className="text-xl font-bold">Bode.</div>
          <div className="flex space-x-2">
            <a
              href="mailto:olabodebalogun80@gmail.com"
              target="_blank"
              className="bg-gray-800 px-4 py-2 rounded-full"
            >
              Email me
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Name with outline effect */}
          <div className="text-center relative my-16">
            <h1
              data-aos="zoom-in"
              data-aos-delay="400"
              className="text-5xl md:text-7xl lg:text-9xl font-bold text-transparent cursor-pointer"
              style={{
                WebkitTextStroke: "2px white",
                textShadow: "none",
              }}
              ref={textRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              Balogun Olabode
            </h1>

            {isHovering && (
              <div
                className="absolute z-20 pointer-events-none transition-opacity duration-300 hidden md:inline-block"
                style={{
                  left: `${mousePosition.x - 128}px`,
                  top: `${mousePosition.y - 128}px`,
                  transform: "translate(-10%, -90%)",
                  opacity: isHovering ? 1 : 0,
                }}
              >
                <img
                  src={Hero}
                  alt="Profile"
                  className="w-32 h-32 rounded-full"
                />
              </div>
            )}

            <h3 className="mt-3 text-lg">Frontend Engineer.</h3>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Left Side Info */}
            <div data-aos="fade-up" className="space-y-8">
              <div>
                <h2 className="text-lg font-bold mb-2">BIO</h2>
                <p className="text-gray-400">
                  Senior web frontend engineer with 5+ years of experience.
                  React native developer.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-2">SKILLS</h2>
                <p className="text-gray-400">
                  React • Typescript • Next.js • Tailwind CSS • React Native •
                  SCSS
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold mb-2">CONNECT</h2>
                <div className="flex space-x-2">
                  {/* GitHub */}
                  <a
                    href="https://github.com/olabode-cmd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.64.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.564 9.564 0 015.01 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.85-2.35 4.7-4.58 4.95.36.31.69.93.69 1.87 0 1.35-.01 2.44-.01 2.78 0 .27.16.59.67.49A10.003 10.003 0 0022 12c0-5.52-4.48-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {/* Gmail */}
                  <a
                    href="mailto:olabodebalogun80@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
                  >
                    <span className="sr-only">Gmail</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 2l-6.6 5L5.4 6H18.6zM4 8.8V18h16V8.8l-8 6.2-8-6.2z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 8.75h4v12H3v-12zm6 0h3.8v1.74h.05c.53-.95 1.84-1.95 3.79-1.95 4.06 0 4.81 2.67 4.81 6.15v6.06h-4v-5.38c0-1.28-.02-2.93-1.78-2.93-1.78 0-2.05 1.39-2.05 2.83v5.48h-4v-12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Center Profile Image */}
            <div className="relative hidden md:inline-block">
              <img
                src={Hero}
                alt="hero"
                className="w-64 h-64 mx-auto rounded-full"
              />
            </div>

            {/* Right Side with Profile Image and Stats */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex flex-col md:items-end space-y-8"
            >
              {/* Stats */}
              <div className="md:text-right space-y-6 mt-3 md:mt-0">
                <div>
                  <h2 className="text-lg font-bold mb-2">PROJECTS DONE</h2>
                  <p className="text-5xl text-gray-400 font-medium">
                    <CountUp start={0} end={10} loop />+
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-bold mb-2">
                    YEARS OF EXPERIENCE
                  </h2>
                  <p className="text-5xl text-gray-400 font-medium">
                    <CountUp start={0} end={5} />+
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-bold mb-2">
                    HACKATHONS WON/PARTICIPATED
                  </h2>
                  <p className="text-5xl text-gray-400 font-medium">
                    <CountUp start={0} end={0o6} />
                  </p>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <img src={Hero} alt="hero" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-8 pb-16">
        {/* Portfolio */}
        <div className="px-3 md:px-0">
          <div data-aos="fade-up" className="text-center mt-20 md:mt-32 mb-6">
            <h3 className="text-3xl text-white md:text-5xl font-medium mb-2">
              Past Projects
            </h3>
            <p className="text-gray-400">
              Showcasing My Best Work: A Glimpse into My Frontend Creations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 text-white">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <GetInTouchSection />
    </div>
  );
}

export default App
