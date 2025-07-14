import { TypeScriptIcon } from "@/components/icons";
import Typography from "@/components/typography/Typography";

const ProjectCard = () => {
  return (
    <div className=" group relative cursor-pointer overflow-hidden   ring-1 ring-gray/20 hover:shadow-xl hover:ring-primary/50 transition-shadow duration-500">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          alt="Civen AI"
          className="object-cover transition-transform duration-500 group-hover:scale-110 absolute h-full w-full left-0 top-0 ring-0 bottom-0 "
          sizes="100vw"
          src="https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="p-6">
        <div className="text-gray uppercase text-xs">webapp 2024</div>
        <Typography variant="h4">Civen AI</Typography>
        <Typography variant="p" className="mt-2 line-clamp-2  text-sm">
          Civen AI is a platform that allows you to create AI-powered cover
          letters that will help you get your dream job
        </Typography>
        <div className="mt-4 flex flex-wrap gap-2">
          <TypeScriptIcon />
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
