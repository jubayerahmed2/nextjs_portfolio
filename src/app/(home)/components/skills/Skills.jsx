import { Button } from "@/components/ui/button";
import { technologies } from "@/constant";

const Skills = () => {
  return (
    <section className="px-4 py-20 text-white container mx-auto">
      <div className="space-y-8">
        <div className="mb-12 flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold">
              Skills &amp; Technologies
            </h2>
            <p className="text-muted-foreground">
              Technologies I work with on a daily basis
            </p>
          </div>
          <a href="/about">
            <Button variant={"outline"}>
              View all skills
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
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-6">
          {technologies.map((technology) => (
            <div
              key={technologies.id}
              className="group flex flex-col items-center gap-2"
            >
              <div className=" ring-border/50 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 transition-colors hover:text-[#61DAFB] hover:shadow-lg">
                {technologies.icon}
              </div>
              <span className="text-muted-foreground text-sm font-medium">
                {technology.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
