import { Button } from "@/components/ui/button";
import { technologies } from "@/constant";

const Skills = () => {
  return (
    <section className="px-6 py-20 text-white container mx-auto ">
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
            <Button variant={"link"}>
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
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="group flex flex-col items-center gap-2 border-2 border-gray/20 bg-[#18181b8e] py-5"
            >
              <div className="bg-gray/5  ring-gray/20 flex h-20 w-20 items-center justify-center  ring-1 transition-colors hover:text-[#61DAFB] hover:shadow-lg">
                {technology.icon}
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
