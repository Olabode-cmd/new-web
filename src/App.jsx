import { useState } from 'react'

function App() {

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
          <div className="text-center my-16">
            <h1
              className="text-5xl md:text-7xl lg:text-9xl font-bold text-transparent"
              style={{
                WebkitTextStroke: "2px white",
                textShadow: "none",
              }}
            >
              Balogun Olabode
            </h1>

            <h3 className="mt-3 text-lg">First of His Name.</h3>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Left Side Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-2">BIO</h2>
                <p className="text-gray-400">
                  Senior web frontend engineer with 5+ years of experience.
                  React native developer.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">SKILLS</h2>
                <p className="text-gray-400">
                  React • Typescript • Next.js • Tailwind CSS • React Native
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">CONNECT</h2>
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
            <div className="relative w-64 h-64 hidden md:inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-900"></div>
              </div>
            </div>

            {/* Right Side with Profile Image and Stats */}
            <div className="flex flex-col items-center md:items-end space-y-8">
              {/* Stats */}
              <div className="text-right space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-2">PROJECTS DONE</h2>
                  <p className="text-6xl font-bold">10+</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">
                    YEARS OF EXPERIENCE
                  </h2>
                  <p className="text-6xl font-bold">5+</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">HACKATHONS WON/PARTICIPATED</h2>
                  <p className="text-6xl font-bold">06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
