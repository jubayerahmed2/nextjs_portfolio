import { footerArrow } from "@/assets/index";
import Image from "next/image";
import SocialLinks from "../hero/sub-components/SocialLinks";

const Footer = () => {
  return (
    <footer className="container pt-24 pb-16 mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="pb-5 text-xl font-bold text-gray-300">
          Get in touch to me.
        </h2>
        <Image
          alt="footer-arrow"
          className="h-[120px]"
          width={200}
          height={800}
          src={footerArrow}
        />

        <SocialLinks />
      </div>
    </footer>
  );
};
export default Footer;
