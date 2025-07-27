import Typography from "@/components/typography/Typography";

const Connection = () => {
  return (
    <section className="relative px-6 py-20  bg-accent">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
            <span className="text-sm tracking-wider uppercase text-zinc-500 dark:text-zinc-400 font-mono">
              Online Presence
            </span>
            <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <Typography variant="h2">
            Find Me
            <br />
            <span className="font-serif italic">Online</span>
          </Typography>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="animate-in fade-in duration-700 slide-in-from-bottom-4"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden bg-black dark:bg-zinc-950 border border-gray/50 dark:border-zinc-800 transition-all duration-700 hover:border-zinc-300 dark:hover:border-zinc-700"
            >
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-0 left-0 w-px h-full bg-current" />
                <div className="absolute top-0 right-0 w-px h-full bg-current" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 transition-colors duration-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 22.525H0l12-21.05 12 21.05z" />
                    </svg>
                  </div>
                  <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-light text-white mb-3 tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300">
                  Vercel
                </h3>
                <p className="text-sm text-gray font-light leading-relaxed mb-4">
                  Frontend cloud platform for modern web development
                </p>
                <div className="inline-flex items-center gap-2 text-zinc-700 dark:text-zinc-300 group-hover:gap-3 transition-all duration-300">
                  <span className="text-xs tracking-wide font-mono uppercase text-gray">
                    Visit Profile
                  </span>
                  <div className="w-4 h-px bg-zinc-700 dark:bg-zinc-300 group-hover:w-6 transition-all duration-300" />
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connection;


