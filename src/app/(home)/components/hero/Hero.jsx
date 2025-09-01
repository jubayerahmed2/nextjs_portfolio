import { grid, profile } from "@/assets/index";
import Typography from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="px-6 pt-16 mx-auto ">
      <div className="flex flex-col-reverse items-center justify-between gap-8 pb-16 lg:flex-row">
        <div className="flex w-full flex-col gap-6 py-6 lg:w-1/2">
          <div className="inline-flex w-fit items-center gap-2  bg-gray-800/50 px-4 py-2 backdrop-blur-sm">
            <p className="text-sm text-gray-300">
              <span className="inline-block h-3 w-3 bg-primary mr-1 animate-pulse duration-100" />
              Open to Work & Collaborations
            </p>
          </div>
          <h1 className="text-3xl   md:text-4xl lg:text-6xl">
            <span className="text-primary">
              <span className="font-light">Jubayer</span> <br />{" "}
              <em className="font-serif font-semibold">Ahmed</em>
            </span>
          </h1>
          {/* <div className="relative">
            <p className="text-lg font-medium tracking-wide text-gray-200 md:text-xl">
              Back-end Developer
            </p>
            <div className="from-primary absolute -bottom-2 left-0 h-px w-24 bg-gradient-to-r to-transparent" />
          </div> */}
          <Typography variant="p" className="text-lg">
            Passionate Backend Developer, Tech Enthusiast and spiritual guy from
            Bangladesh. I mostly deal with web development with
            HTML5/CSS/Javascript, React and NodeJS, software development stack
            in these days.
          </Typography>
          {/* <SocialLinks /> */}
          <div className="mt-4 flex items-start gap-6 md:flex-row md:items-center">
            <Link href="#contact">
              <Button className="flex gap-3 " variant="ghost">
                Let's Collaborate
              </Button>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1mJ2ivnr_Yt53lQNnzYJ_VX1VRmnNXgH9/view?usp=sharing"
              }
              target="_blank"
            >
              <Button variant="outline" className="flex gap-3 ">
                {" "}
                <span className="font-medium text-white">View Resume</span>
                {/* <DownloadIcon /> */}
              </Button>
            </Link>
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
          <div className="relative">
            <div className=" flex justify-center items-center gap-1 text-xs top-8 -left-6 bg-accent px-4 py-2 border border-gray/20 uppercase absolute z-50 text-white">
              <span className="text-[8px]">⬜</span> FrontEnd
            </div>
            <div className=" flex justify-center items-center gap-1 text-xs bottom-4 -right-6 bg-accent px-4 py-2 border border-gray/20 uppercase absolute z-50 text-white">
              <span className="text-[8px]">⬜</span> BackEnd
            </div>
            <div className="h-64 w-64 transform overflow-hidden rounded-full sm:rounded-none  shadow-xl transition-all duration-300  lg:h-96 lg:w-96 ">
              <div className="from-accent/40  absolute inset-0 z-10 bg-gradient-to-tr to-transparent opacity-100 transition-opacity duration-300 hover:opacity-0" />
              <Image
                alt="Jubayer Ahmed Profile"
                className=" h-full w-full object-cover absolute left-0 right-0 top-0 bottom-0 text-transparent"
                src={profile}
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
