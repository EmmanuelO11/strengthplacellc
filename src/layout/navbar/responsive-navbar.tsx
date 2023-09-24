"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navbarItems } from "./data";

function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <div className="fixed z-50 top-0 flex items-center justify-between w-screen bg-white h-[10vh] px-8">
      <Image src={"/navbar/icon.svg"} alt="icon" width={180} height={180} />
      <Sheet open={open} onOpenChange={toggleOpen}>
        <SheetTrigger asChild>
          <div className="flex w-full items-end justify-end ">
            <AlignRight />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Strength Place</SheetTitle>
            <SheetDescription>
              <div className="flex flex-col w-full items-start justify-start gap-6 mt-12 ">
                {navbarItems.map((item, index) => (
                  <Link href={item.link} key={index} onClick={toggleOpen}>
                    <p className="cursor-pointer text-primary">{item.name}</p>
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4"></div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default ResponsiveNavbar;
