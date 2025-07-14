import { EmailIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constant";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-secondary sticky top-0 z-50 h-16 w-full border-b border-gray/40">
      <div className="mx-auto flex h-full container items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2.5" href="/">
            <span className="font-code font-bold text-white">jAhmed</span>
          </a>
          <div className="hidden items-center gap-6 md:flex uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                className="text-gray hover:text-white text-sm font-normal transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/hire-me">
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
