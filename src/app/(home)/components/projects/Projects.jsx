import Typography from "@/components/typography/Typography";
import ProjectCard from "./sub-components/ProjectCard";

const Projects = () => {
  return (
    <section className="container space-y-10 py-16 mx-auto" id="services">
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
    </section>
  );
};
export default Projects;
