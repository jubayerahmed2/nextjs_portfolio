import { grid, profile } from "@/assets/index";
import Typography from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import SocialLinks from "./sub-components/SocialLinks";

const HeroSection = () => {
  return (
    <div className="container pt-16 mx-auto px-6">
      <div className="flex flex-col-reverse items-center justify-between gap-8 pb-16 lg:flex-row">
        <div className="flex w-full flex-col gap-6 py-6 lg:w-1/2">
          <div className="inline-flex w-fit items-center gap-2  bg-gray-800/50 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm text-gray-300">
              <span className="inline-block h-3 w-3 bg-primary mr-1 animate-pulse duration-100" />
              Open to Work & Collaborations
            </p>
          </div>
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            <span className="text-primary">Jubayer Ahmed</span>
          </h1>
          <div className="relative">
            <p className="text-lg font-medium tracking-wide text-gray-200 md:text-xl">
              Front-end Developer
            </p>
            <div className="from-primary absolute -bottom-2 left-0 h-px w-24 bg-gradient-to-r to-transparent" />
          </div>
          <Typography variant="p" className="text-lg">
            Web Developer building modern applications with Next.js, TypeScript,
            and React. Currently learning backend technologies and focusing on
            creating functional, accessible web experiences.
          </Typography>
          <SocialLinks />
          <div className="mt-4 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <Button className="flex gap-3 " variant="ghost">
              Let's Collaborate
            </Button>
            <Button variant="outline" className="flex gap-3 ">
              {" "}
              <span className="font-medium text-white">Download Resume</span>
              {/* <DownloadIcon /> */}
            </Button>
          </div>
        </div>
        <div className="my-8 flex w-full items-center justify-center lg:w-1/2 relative">
          <Image
            alt="hero grid"
            className="h-full w-full object-cover absolute left-0 right-0 top-0 bottom-0 "
            src={grid}
            height={500}
            width={500}
          />
          <div className="rounded-full border-primary hover:border-secondary relative h-64 w-64 transform overflow-hidden border-8 shadow-xl transition-all duration-300 hover:scale-105 lg:h-96 lg:w-96">
            <div className="from-primary/30 absolute inset-0 z-10 bg-gradient-to-tr to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <Image
              alt="Jubayer Ahmed Profile"
              className="h-full w-full object-cover absolute left-0 right-0 top-0 bottom-0 text-transparent"
              src={profile}
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
