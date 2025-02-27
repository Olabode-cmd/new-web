import React, { useState } from "react";

const GetInTouchSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const email = "olabodebalogun80@gmail.com";

  return (
    <div className="bg-black text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section heading */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
          >
            Let's Create Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Extraordinary
            </span>{" "}
            Together
          </h2>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            className="text-gray-400 text-md md:text-lg mb-12 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hello? I'm always open to
            discussing new projects, creative ideas or opportunities to be part
            of your vision.
          </p>

          {/* Email CTA */}
          <div className="inline-block relative group">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur transition-all duration-300 ${
                isHovering ? "opacity-100 scale-110" : "opacity-70 scale-100"
              }`}
              style={{ zIndex: -1 }}
            ></div>

            <a
              data-aos="fade-up"
              href={`mailto:${email}`}
              className="relative inline-block py-5 px-12 text-xl md:text-2xl font-bold tracking-wider bg-black rounded-lg transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Email me
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
            </a>
          </div>

          {/* Additional contact incentive */}
          <p className="mt-10 text-gray-500">
            Response time:{" "}
            <span className="text-white">Usually within 24-48 hours</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;