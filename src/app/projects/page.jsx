import Typography from "@/components/typography/Typography";

const Projects = () => {
  return (
    <div className=" transition-colors duration-300 ">
      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="">
            <div className="relative">
              <main>
                <section className="relative overflow-hidden px-6 py-24 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="animate-in fade-in slide-in-from-bottom-4 relative z-10 mx-auto max-w-4xl text-center duration-1000">
                    <div className="animate-in fade-in mb-8 flex items-center justify-center gap-4 delay-200 duration-700">
                      <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                      <span className="font-mono text-sm tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                        Work Portfolio
                      </span>
                      <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                    </div>
                    <Typography variant="h1">
                      {" "}
                      Selected
                      <br />
                      <span className="font-serif italic">Projects</span>
                    </Typography>
                    <p className="animate-in fade-in mx-auto mb-12 max-w-3xl text-lg leading-relaxed font-light text-zinc-600 delay-500 duration-700 md:text-xl dark:text-zinc-400">
                      A curated collection of digital experiences, ranging from
                      web applications to browser extensions. Each project
                      represents a unique challenge solved through thoughtful
                      design and engineering.
                    </p>
                    <div className="animate-in fade-in flex flex-wrap items-center justify-center gap-12 text-center delay-700 duration-700">
                      <div className="space-y-1">
                        <div className="font-mono text-2xl font-light text-zinc-900 dark:text-zinc-100">
                          15+
                        </div>
                        <div className="font-mono text-sm tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                          Projects
                        </div>
                      </div>
                      <div className="h-8 w-px bg-zinc-300 dark:bg-zinc-700" />
                      <div className="space-y-1">
                        <div className="font-mono text-2xl font-light text-zinc-900 dark:text-zinc-100">
                          3+
                        </div>
                        <div className="font-mono text-sm tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                          Years
                        </div>
                      </div>
                      <div className="h-8 w-px bg-zinc-300 dark:bg-zinc-700" />
                      <div className="space-y-1">
                        <div className="font-mono text-2xl font-light text-zinc-900 dark:text-zinc-100">
                          ∞
                        </div>
                        <div className="font-mono text-sm tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                          Learning
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 opacity-20 dark:opacity-30">
                    <div className="h-4 w-4 rotate-45 border border-zinc-400 dark:border-zinc-600" />
                  </div>
                  <div className="absolute top-8 right-8 opacity-20 dark:opacity-30">
                    <div className="h-6 w-6 border border-zinc-400 dark:border-zinc-600" />
                  </div>
                </section>

                <section className="relative bg-accent px-6 py-20 ">
                  <div className="absolute inset-0 opacity-3 dark:opacity-5" />
                  <div className="relative z-10 mx-auto max-w-4xl">
                    <div className="mb-16 text-center">
                      <div className="mb-6 flex items-center justify-center gap-4">
                        <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                        <span className="font-mono text-sm tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                          1{/* */}
                          Project{/* */}s
                        </span>
                        <div className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                      </div>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      <div
                        className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                        style={{ animationDelay: "0ms" }}
                      >
                        <div
                          className="group relative cursor-pointer overflow-hidden border border-gray/50 bg-black transition-all duration-700 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:R6jbttsplb:"
                          data-state="closed"
                        >
                          <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            <img
                              src="https://projectsly.com/images/blog/best-project-design.png?v=1686553999071005322"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                color: "transparent",
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          </div>
                          <div className="relative p-6">
                            <div className="mb-4 inline-flex items-center gap-2">
                              <div className="h-2 w-2 bg-zinc-400 dark:bg-zinc-600" />
                              <span className="font-mono text-xs tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                                webapp
                              </span>
                            </div>
                            <h3 className="mb-3 text-xl font-light tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-200">
                              Apex UI
                            </h3>
                            <p className="mb-4 line-clamp-2 text-sm leading-relaxed font-light text-zinc-600 dark:text-zinc-400">
                              Fully customizable templates to craft modern
                              websites and apps exactly as you envision them.
                            </p>
                            <div className="mb-4 flex flex-wrap gap-2">
                              <div
                                className="flex h-8 w-8 items-center justify-center border border-zinc-200 bg-zinc-100 transition-colors duration-300 group-hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600"
                                title="Next.js"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  role="img"
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                                </svg>
                              </div>
                              <div
                                className="flex h-8 w-8 items-center justify-center border border-zinc-200 bg-zinc-100 transition-colors duration-300 group-hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600"
                                title="React.js"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  role="img"
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                                </svg>
                              </div>
                              <div
                                className="flex h-8 w-8 items-center justify-center border border-zinc-200 bg-zinc-100 transition-colors duration-300 group-hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600"
                                title="Tailwind CSS"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  role="img"
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4"
                                  style={{ color: "#06B6D4" }}
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                                </svg>
                              </div>
                              <div
                                className="flex h-8 w-8 items-center justify-center border border-zinc-200 bg-zinc-100 transition-colors duration-300 group-hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600"
                                title="Framer Motion"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-4 w-4"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
                                  <path d="M20 12l-8 8l-4 -4" />
                                </svg>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-2 text-zinc-700 transition-all duration-300 group-hover:gap-3 dark:text-zinc-300">
                              <span className="font-mono text-xs tracking-wide uppercase">
                                View Details
                              </span>
                              <div className="h-px w-4 bg-zinc-700 transition-all duration-300 group-hover:w-6 dark:bg-zinc-300" />
                              <svg
                                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.5"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
