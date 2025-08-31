import Typography from "@/components/typography/Typography";
import { Link } from "lucide-react";

const ProjectCard = ({ project }) => {
  const { title, year, image, description, category, stacks, liveSite } =
    project || {};
  return (
    <div className=" group relative  overflow-hidden   ring-1 ring-gray/20 hover:shadow-xl hover:ring-primary/50 transition-shadow duration-500">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          alt="Civen AI"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110 absolute h-full w-full left-0 top-0 ring-0 bottom-0 "
          sizes="100vw"
          src={image}
        />
      </div>
      <div className="p-6">
        <div className="text-gray uppercase text-xs">
          {category} {year}
        </div>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p" className="mt-2 line-clamp-2  text-sm">
          {description}
        </Typography>
        <div className="mt-4 flex flex-wrap gap-2">
          {stacks.slice(0, 3).map((stack) => {
            return (
              <h2 className="text-gray text-sm border-white/20 border-1 px-3 py-1">
                {" "}
                {stack}{" "}
              </h2>
            );
          })}
        </div>
        <div className="mt-5 flex justify-end">
          <a href={liveSite}>
            {" "}
            <Link className="text-gray-300 text-sm" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
