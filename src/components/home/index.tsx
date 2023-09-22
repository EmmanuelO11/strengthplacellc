import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Title from "../ui/title";

const HomeComponent = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-[58em] pt-24 px-5 md:px-20">
      <div className="flex w-full items-center justify-center gap-3">
        <Facebook size={18} className="cursor-pointer text-primary" />
        <Instagram size={18} className="cursor-pointer text-primary" />
      </div>
      <div className="w-full relative items-center">
        <Title align="center" text={"Strength is Medicine"} />
        <Image
          src={"/star.svg"}
          alt="icon"
          width={120}
          height={120}
          className="hidden md:block absolute right-0 top-[-30px]"
        />
      </div>
      <div className="w-full h-full relative mt-12">
        <Image
          src={"/home.jpg"}
          alt="icon"
          fill
          className="object-cover rounded-[50px]"
        />
        <Image
          src={"/star.svg"}
          alt="icon"
          width={120}
          height={120}
          className="absolute left-[-10px] top-[-10px] md:left-[-30px] md:top-[-30px]"
        />
        <div className="flex flex-col gap-5 absolute text-white bottom-20 left-10 md:left-20">
          <div className="flex items-center gap-6">
            <Image
              className="cursor-pointer"
              src={"/play.svg"}
              alt="icon"
              width={50}
              height={50}
            />
            <p>3 min</p>
          </div>
          <p className="w-full md:max-w-[40vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
