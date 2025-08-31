const Blogs = () => {
  return (
    <div className="transition-colors duration-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="">
          <div className="">
            <div className="relative">
              <main className="">
                <section className="relative px-6 py-24 ">
                  <div className="relative z-10 max-w-4xl mx-auto text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
                    <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700 delay-200">
                      <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                      <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                        Blog &amp; Insights
                      </span>
                      <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight leading-tight animate-in fade-in duration-700 delay-300">
                      Latest
                      <br />
                      <span className="font-serif italic">Articles</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
                      Discover insights, tutorials, and stories about web
                      development, design, and the ever-evolving world of
                      technology.
                    </p>
                  </div>
                  <div className="absolute bottom-8 left-8 opacity-20 dark:opacity-30">
                    <div className="w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45" />
                  </div>
                  <div className="absolute top-8 right-8 opacity-20 dark:opacity-30">
                    <div className="w-6 h-6 border border-zinc-400 dark:border-zinc-600" />
                  </div>
                </section>
                <section className="relative px-6 py-20 ">
                  <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                        <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                          10{/* */} Article{/* */}s
                        </span>
                        <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                      </div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      <div
                        className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                        style={{ animationDelay: "450ms" }}
                      >
                        <a
                          className="group block relative overflow-hidden  border border-zinc-200 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700"
                          href="/blog/exploring-ai-powered-ides"
                        >
                          <div className="absolute inset-0 opacity-5 dark:opacity-10">
                            <div className="absolute top-0 left-0 w-px h-full bg-current" />
                            <div className="absolute top-0 right-0 w-px h-full bg-current" />
                          </div>
                          <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            <img
                              alt="AI-Powered IDEs: Exploring Modern Coding with Trae, Cursor, Windsurf, and Pear"
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
                              src="/_next/image?url=%2Fblogs%2Fexploring-ai-powered-ides.webp&w=3840&q=75"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="relative p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
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
                                  className="lucide lucide-calendar w-3 h-3"
                                >
                                  <path d="M8 2v4" />
                                  <path d="M16 2v4" />
                                  <rect
                                    width={18}
                                    height={18}
                                    x={3}
                                    y={4}
                                    rx={2}
                                  />
                                  <path d="M3 10h18" />
                                </svg>
                                <span className="font-mono uppercase tracking-wide">
                                  Feb 27, 2025
                                </span>
                              </div>
                              <div className="flex items-center -space-x-2">
                                <span
                                  className="relative shrink-0 overflow-hidden rounded-full inline-block border-2 w-8 h-8 border-background"
                                  data-state="closed"
                                >
                                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                                    NA
                                  </span>
                                </span>
                              </div>
                            </div>
                            <h3 className="text-xl font-light text-zinc-900 dark:text-zinc-100 mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300 line-clamp-2">
                              AI-Powered IDEs: Exploring Modern Coding with
                              Trae, Cursor, Windsurf, and Pear
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-2 mb-6">
                              Discover the future of coding with AI-powered
                              IDEs. Trae, Cursor, Windsurf, and Pear are leading
                              the way in modern development tools.
                            </p>
                            <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
                              <span className="text-xs tracking-wide font-mono uppercase">
                                Read Article
                              </span>
                              <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300" />
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
                                className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                              >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </a>
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

export default Blogs;
