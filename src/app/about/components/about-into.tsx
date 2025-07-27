import Typography from "@/components/typography/Typography";

const AboutIntro = () => {
  return (
    <section className="relative px-6 pt-10 pb-24 overflow-hidden ">
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <div className="flex items-center justify-center gap-4 mb-8 animate-in fade-in duration-700 delay-200">
          <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-sm tracking-wider uppercase text-gray dark:text-zinc-400 font-mono">
            About Me
          </span>
          <div className="w-8 h-px bg-zinc-300 dark:bg-zinc-700" />
        </div>
        <Typography variant="h1">
          Behind the
          <br />
          <span className="font-serif italic">Code</span>
        </Typography>

        <div className="space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
          <Typography
          
          
          variant="p" className="">
            MERN and Next.js Developer with hands-on experience in DevOps, cloud
            platforms like AWS and Cloudflare, and a strong foundation in
            full-stack development.
          </Typography>
          <Typography variant="p" className="">
            3+ years of expertise in UI/UX design and two year of full-stack
            development, collaborating with clients to deliver high-quality
            projects. Adept at deploying, managing, and scaling applications
            using Vercel, Cloudflare Pages, and AWS.
          </Typography>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 dark:opacity-30">
        <div className="w-4 h-4 border border-zinc-400 dark:border-zinc-600 rotate-45" />
      </div>
      <div className="absolute top-8 right-8 opacity-20 dark:opacity-30">
        <div className="w-6 h-6 border border-zinc-400 dark:border-zinc-600" />
      </div>
    </section>
  );
};

export default AboutIntro;

