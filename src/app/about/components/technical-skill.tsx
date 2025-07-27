import Typography from "@/components/typography/Typography";

const TechnicalSkill = () => {
  return (
    <section className="relative px-6 py-20 ">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
              Technical Skills
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          </div>

          <Typography variant="h2">
            Technologies I<br />
            <span className="font-serif italic">Work With</span>
          </Typography>
        </div>
        <div className="space-y-12">
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "0ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-light text-white">
                Frontend Development
              </h3>
              <div className="flex-1 h-px bg-accent dark:bg-zinc-800" />

              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                5{/* */} Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "0ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#61DAFB" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    React.js
                  </h4>
                </div>
              </div>
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "50ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Next.js
                  </h4>
                </div>
              </div>
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "100ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#06B6D4" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Tailwind CSS
                  </h4>
                </div>
              </div>

              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#646CFF" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Vite
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-light text-white tracking-tight">
                Backend Development
              </h3>
              <div className="flex-1 h-px bg-accent dark:bg-zinc-800" />

              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                2{/* */} Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Express.js
                  </h4>
                </div>
              </div>
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "250ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#339933" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Node.js
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-light text-white tracking-tight">
                Database
              </h3>
              <div className="flex-1 h-px bg-accent dark:bg-zinc-800" />

              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                1{/* */} Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "400ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#47A248" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    MongoDB
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className=" text-white text-xl font-light  tracking-tight">
                UI/UX Design
              </h3>
              <div className="flex-1 h-px bg-accent dark:bg-zinc-800" />

              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                2{/* */} Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "600ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#F24E1E" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Figma
                  </h4>
                </div>
              </div>

              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "700ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-panels-top-left w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#0284C7" }}
                    >
                      <rect width={18} height={18} x={3} y={3} rx={2} />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Responsive Design
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "800ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-light text-white tracking-tight">
                Programming
              </h3>
              <div className="flex-1 h-px bg-accent dark:bg-zinc-800" />

              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                2{/* */} Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "800ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#F7DF1E" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    JavaScript
                  </h4>
                </div>
              </div>
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "850ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#3178C6" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    TypeScript
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-light text-white tracking-tight">
                Tools &amp; Platforms
              </h3>
              <div className="flex-1 h-px bg-accent dark:bg-zinc-800" />

              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono uppercase tracking-wide">
                3{/* */} Skills
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "1000ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: "#F05032" }}
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Git
                  </h4>
                </div>
              </div>
              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "1050ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    GitHub
                  </h4>
                </div>
              </div>

              <div
                className="group relative overflow-hidden bg-accent border-2 border-gray/20 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700 animate-in fade-in duration-500"
                style={{ animationDelay: "1200ms" }}
              >
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute top-0 left-0 w-px h-full bg-current" />
                  <div className="absolute top-0 right-0 w-px h-full bg-current" />
                </div>
                <div className="relative p-4 text-center">
                  <div className="flex items-center justify-center mb-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 22.525H0l12-21.05 12 21.05z" />
                    </svg>
                  </div>
                  <h4 className="text-xs text-white/80 font-light transition-colors duration-300">
                    Vercel
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkill;
