import Typography from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  return (
    <section className=" px-4 py-16 container mx-auto">
      <div className="mx-auto">
        <div className="mb-12 flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <div className="space-y-3">
              <p className="text-primary flex items-center gap-2 font-bold">
                <span className="bg-primary block h-1 w-7" />
                Blogs
              </p>
              <Typography variant="h2"> Latest Blogs</Typography>
            </div>
            <p className="text-muted-foreground">
              Here are some of my latest blog posts where I share my thoughts,
              experiences, and tips on web development and programming.
            </p>
          </div>
          <a href="/blog">
            <Button variant="link">
              Explore More
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
                className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            className=" group relative cursor-pointer overflow-hidden   ring-1 ring-gray/20 hover:shadow-xl hover:ring-primary/50 transition-shadow duration-500"
            href="/blog/announcing-snip-ui"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt="Introducing Snip UI: Open-Source Web Interface for Local LLMs"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="transition-transform duration-300 group-hover:scale-105"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: "cover",
                  color: "transparent",
                }}
                sizes="100vw"
                src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
              />
            </div>
            <div className="flex flex-grow flex-col p-6">
              <h3 className="group-hover:underline text-white mb-3 line-clamp-2 text-xl font-semibold transition-colors">
                Introducing Snip UI: Open-Source Web Interface for Local LLMs
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                Discover Snip, an open-source chat interface that makes
                interacting with locally hosted Large Language Models seamless
                and secure.
              </p>
              <div className="mt-auto flex items-center justify-between border-t pt-4 border-accent">
                <p className="text-muted-foreground flex items-center gap-2 text-xs">
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
                    className="lucide lucide-calendar h-4 w-4"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width={18} height={18} x={3} y={4} rx={2} />
                    <path d="M3 10h18" />
                  </svg>
                  Feb 2, 2025
                </p>
                <div className="flex items-center -space-x-2">
                  <span
                    className="border-background relative inline-block h-8 w-8 shrink-0 overflow-hidden rounded-full border-2"
                    data-state="closed"
                  >
                    <span className="bg-muted flex h-full w-full items-center justify-center rounded-full">
                      NA
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Blogs;
