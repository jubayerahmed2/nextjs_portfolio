import { socialLinks } from "@/constant";

const SocialLinks = () => {
  return (
    <ul className="flex items-center gap-4 pt-7">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            className=" text-light text-white hover:text-primary block cursor-pointer p-1 hover:-translate-y-1 transition-all duration-150 "
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLinks;
