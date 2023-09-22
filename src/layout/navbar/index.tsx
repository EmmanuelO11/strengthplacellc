import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import ResponsiveNavbar from "./responsive-navbar";
const Navbar = () => {
  return (
    <>
      <div className="hidden w-sceen h-[10vh] md:flex items-center justify-between px-16">
        <Image src={"/navbar/icon.svg"} alt="icon" width={180} height={180} />
        <div className="flex items-center gap-4">
          {["Home", "About", "Trainer", "Couching", "Contact"].map(
            (item, index) => (
              <p className="cursor-pointer text-primary" key={index}>
                {item}
              </p>
            )
          )}
          <Search size={18} className="cursor-pointer text-primary" />
        </div>
        <Button variant={"outline"} className="w-[9em] rounded-[50px]">
          Join Now
        </Button>
      </div>
      <div className="md:hidden">
        <ResponsiveNavbar />
      </div>
    </>
  );
};

export default Navbar;
