import Typography from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import ProjectCard from "./sub-components/ProjectCard";

const Projects = () => {
  return (
    <section className="container space-y-10 py-16 mx-auto px-6" id="services">
      <div className="space-y-3">
        <p className="text-primary flex items-center gap-2 font-bold">
          <span className="bg-primary block h-1 w-7" />
          Projects
        </p>
        <Typography variant="h2">What projects I've build?</Typography>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-center  -mt-5">
        <Button variant={"link"} className="text-white ">
          Brows all project
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
      </div>
    </section>
  );
};
export default Projects;
