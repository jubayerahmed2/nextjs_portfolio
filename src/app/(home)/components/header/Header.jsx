import { profile } from "@/assets/index";
import { EmailIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className=" h-16 my-2">
      <div className="mx-auto flex h-full container items-center justify-between px-5">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2.5" href="/">
            <div className="font-code font-bold text-white flex justify-center items-center gap-2">
              <div className="relative">
                <Image
                  alt="Jubayer Ahmed Profile"
                  className=" h-7 w-7 rounded-full object-cover "
                  src={profile}
                  height={50}
                  width={50}
                />{" "}
                <div className="h-7 w-7 rounded-full bg-accent absolute top-0 opacity-30" />{" "}
              </div>
              <h4>Jubayer Ahmed</h4>
            </div>
          </a>
          <div className="hidden items-center gap-6 md:flex capitalize">
            {/* {navLinks.map((link) => (
              <Link
                key={link.id}
                className="text-white hover:text-gray text-sm font-normal transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))} */}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#contact">
            <Button variant="ghost" className="gap-2">
              <EmailIcon size="size-5" />
              Hire Me
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;
