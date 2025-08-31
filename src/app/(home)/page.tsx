import {
  Blogs,
  ContactSection,
  Footer,
  HeroSection,
  Projects,
  Skills,
} from "./index";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <Blogs />
      <ContactSection />
      <Footer />
    </>
  );
}
