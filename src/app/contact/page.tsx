const Contact = () => {
  return (
    <div className=" transition-colors duration-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="">
          <div>
            <div className="relative">
              <main className="">
                <section className="relative px-6 py-24  overflow-hidden ">
                  <div className="relative z-10 max-w-4xl mx-auto text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
                    <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700 delay-200">
                      <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                      <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                        Let's Connect
                      </span>
                      <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight leading-tight animate-in fade-in duration-700 delay-300">
                      Get in
                      <br />
                      <span className="font-serif italic">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
                      Have a project in mind or just want to chat? I'd love to
                      hear from you. Let's discuss how we can bring your ideas
                      to life.
                    </p>
                  </div>
                  <div className="absolute bottom-8 left-8 opacity-20 dark:opacity-30">
                    <div className="w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45" />
                  </div>
                  <div className="absolute top-8 right-8 opacity-20 dark:opacity-30">
                    <div className="w-6 h-6 border border-zinc-400 dark:border-zinc-600" />
                  </div>
                </section>
                <div className="grid gap-0 md:grid-cols-[1fr,1.5fr]">
                  <div className="order-last md:order-first">
                    <section className="relative px-6 py-20 ">
                      <div className="relative z-10 max-w-lg mx-auto space-y-12">
                        <div>
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-px " />
                            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                              Contact Info
                            </span>
                          </div>
                          <div className="space-y-6">
                            <div
                              className="group animate-in fade-in duration-700 slide-in-from-bottom-4"
                              style={{ animationDelay: "0ms" }}
                            >
                              <a
                                href="mailto:nabinkhair12@gmail.com"
                                className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                              >
                                <div className="flex h-12 w-12 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                                    className="lucide lucide-mail h-5 w-5 text-zinc-700 dark:text-zinc-300"
                                  >
                                    <rect
                                      width={20}
                                      height={16}
                                      x={2}
                                      y={4}
                                      rx={2}
                                    />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono mb-1">
                                    Email
                                  </div>
                                  <div className="text-zinc-900 dark:text-zinc-100 font-light group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                                    nabinkhair12@gmail.com
                                  </div>
                                </div>
                                <div className="w-4 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-6 transition-all duration-300" />
                              </a>
                            </div>
                            <div
                              className="group animate-in fade-in duration-700 slide-in-from-bottom-4"
                              style={{ animationDelay: "150ms" }}
                            >
                              <a
                                href="https://maps.google.com/?q=Dharan,Nepal"
                                className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                              >
                                <div className="flex h-12 w-12 items-center justify-center bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-colors duration-300">
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
                                    className="lucide lucide-map-pin h-5 w-5 text-zinc-700 dark:text-zinc-300"
                                  >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <div className="text-xs tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono mb-1">
                                    Location
                                  </div>
                                  <div className="text-zinc-900 dark:text-zinc-100 font-light group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                                    Dharan, Nepal
                                  </div>
                                </div>
                                <div className="w-4 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-6 transition-all duration-300" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
                            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                              Social Links
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div
                              className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                              style={{ animationDelay: "300ms" }}
                            >
                              <a
                                href="https://github.com/nabinkhair42"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center h-16 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                                title="GitHub"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 16 16"
                                  className="h-6 w-6 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                              </a>
                            </div>
                            <div
                              className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                              style={{ animationDelay: "450ms" }}
                            >
                              <a
                                href="https://linkedin.com/in/nabin-khair-39b486342"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center h-16 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                                title="LinkedIn"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 16 16"
                                  className="h-6 w-6 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                              </a>
                            </div>
                            <div
                              className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                              style={{ animationDelay: "600ms" }}
                            >
                              <a
                                href="https://www.instagram.com/nabinkhair2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center h-16 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                                title="Instagram"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 16 16"
                                  className="h-6 w-6 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                              </a>
                            </div>
                            <div
                              className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                              style={{ animationDelay: "750ms" }}
                            >
                              <a
                                href="https://www.facebook.com/nabinkhair2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center h-16 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                                title="Facebook"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 512 512"
                                  className="h-6 w-6 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                              </a>
                            </div>
                            <div
                              className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                              style={{ animationDelay: "900ms" }}
                            >
                              <a
                                href="https://x.com/khairnabin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center h-16 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:scale-105"
                                title="Threads"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  strokeWidth={0}
                                  viewBox="0 0 16 16"
                                  className="h-6 w-6 text-zinc-700 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="text-center pt-8 border-t border-zinc-200 dark:border-zinc-800">
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                            I typically respond within 24 hours. Looking forward
                            to hearing from you!
                          </p>
                        </div>
                      </div>
                    </section>
                  </div>
                  <section className="relative px-6 py-20  ">
                    <div className="relative z-10 max-w-lg mx-auto">
                      <div className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-px " />
                          <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
                            Send Message
                          </span>
                        </div>
                        <h2 className="text-3xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight">
                          Start a Conversation
                        </h2>
                      </div>
                      <form className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                          <div
                            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                            style={{ animationDelay: "0ms" }}
                          >
                            <input
                              type="text"
                              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors duration-300"
                              id="name"
                              placeholder="Your Name"
                              required=""
                              defaultValue=""
                            />
                          </div>
                          <div
                            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
                            style={{ animationDelay: "100ms" }}
                          >
                            <input
                              type="email"
                              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors duration-300"
                              id="email"
                              placeholder="Your Email"
                              required=""
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 delay-200">
                          <input
                            type="text"
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors duration-300"
                            id="subject"
                            placeholder="Subject"
                            required=""
                            defaultValue=""
                          />
                        </div>
                        <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 delay-300">
                          <textarea
                            className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors duration-300 resize-none"
                            id="message"
                            placeholder="Your message..."
                            rows={6}
                            required=""
                            defaultValue={""}
                          />
                        </div>
                        <div className="animate-in fade-in duration-700 slide-in-from-bottom-4 delay-400">
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 border-zinc-900 dark:border-zinc-100 hover:border-zinc-800 dark:hover:border-zinc-200 h-10 px-4 w-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 border-0 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 group"
                            type="submit"
                          >
                            <div className="flex items-center gap-2">
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
                                className="lucide lucide-send w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                              >
                                <path d="m22 2-7 20-4-9-9-4Z" />
                                <path d="M22 2 11 13" />
                              </svg>
                              Send Message
                            </div>
                          </button>
                        </div>
                      </form>
                    </div>
                  </section>
                </div>
              </main>
              <div className="absolute top-0 left-0 w-px h-full bg-zinc-200 dark:bg-zinc-800 opacity-50" />
              <div className="absolute top-0 right-0 w-px h-full bg-zinc-200 dark:bg-zinc-800 opacity-50" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
