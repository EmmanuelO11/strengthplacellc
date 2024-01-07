import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navbarItems } from "./data";
import ResponsiveNavbar from "./responsive-navbar";

const Navbar = () => {
  return (
    <>
      <div className="hidden w-sceen h-[10vh] md:flex items-center justify-between px-16">
        <Image src={"/navbar/icon.svg"} alt="icon" width={180} height={180} />
        <div className="flex items-center gap-4">
          {navbarItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <p className="cursor-pointer text-primary">{item.name}</p>
            </Link>
          ))}
        </div>
        <a
          href="https://strengthplace.gymmasteronline.com/portal/signup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant={"outline"}
            className="w-[9em] rounded-[50px] bg-[#EE1B24] text-white"
          >
            Join Now
          </Button>
        </a>
      </div>
      <div className="md:hidden">
        <ResponsiveNavbar />
      </div>
    </>
  );
};

export default Navbar;
