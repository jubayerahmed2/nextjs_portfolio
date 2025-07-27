import AboutIntro from "./components/about-into";
import Connection from "./components/connection";
import TechnicalSkill from "./components/technical-skill";

const About = () => {
  return (
    <div className=" text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div>
          <div>
            <div className="relative">
              <main>
                <AboutIntro />

                <TechnicalSkill />

                <Connection />
              </main>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
