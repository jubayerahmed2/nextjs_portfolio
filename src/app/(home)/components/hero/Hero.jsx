import { profile } from "@/assets/index";
import DownloadIcon from "@/components/icons/Download";
import Image from "next/image";
import SocialLinks from "./sub-components/SocialLinks";

const HeroSection = () => {
  return (
    <div className="container pt-16 mx-auto">
      <div className="flex flex-col-reverse items-center justify-between gap-8 pb-16 lg:flex-row">
        <div className="flex w-full flex-col gap-6 py-6 lg:w-1/2">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-800/50 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm text-gray-300">
              Hi there <span className="animate-wave inline-block">👋</span>
            </p>
            <div className="h-4 w-px bg-gray-700" />
            <p className="text-primary text-sm font-medium">My name is</p>
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
          <p className="mt-2 text-base leading-relaxed text-gray-400">
            A passionate front-end developer with a strong foundation working on
            international and open-source projects. I specialize in creating
            responsive web experiences and have extensive experience in
            mentorship and conducting learning sessions about React/NextJS
            fundamentals.
          </p>
          <SocialLinks />
          <div className="mt-4 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <a
              href="resume_link"
              className="group bg-primary hover:bg-primary/90 shadow-primary/25 hover:shadow-primary/50 flex items-center gap-3 rounded-lg px-6 py-3 shadow-lg transition-all duration-300"
              download=""
            >
              <span className="font-medium text-white">Download Resume</span>
              <DownloadIcon />
            </a>
          </div>
        </div>
        <div className="my-8 flex w-full items-center justify-center lg:w-1/2">
          <div className="border-primary hover:border-secondary relative h-64 w-64 transform overflow-hidden rounded-full border-8 shadow-lg transition-all duration-300 hover:scale-105 lg:h-96 lg:w-96">
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
