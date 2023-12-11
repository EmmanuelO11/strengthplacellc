import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Title from "../ui/title";

const HomeComponent = () => {
  return (
    <div
      id="home"
      className="flex flex-col gap-4 w-full h-[58em] pt-24 px-5 md:px-20"
    >
      <div className="flex w-full items-center justify-center gap-3">
        <a
          href="https://www.facebook.com/profile.php?id=61550089335422&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook size={18} className="cursor-pointer text-primary" />
        </a>
        <a
          href="https://instagram.com/_strengthplace?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={18} className="cursor-pointer text-primary" />
        </a>
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
          alt="Desktop Image"
          fill
          className="w-full h-full object-cover rounded-[50px] 2xl:block" // Hide on medium and larger screens
        />
        <Image
          src={"/home-mobile.jpg"}
          alt="Mobile Image"
          fill
          className="w-full h-full object-cover rounded-[50px] md:hidden" // Display on medium and larger screens
        />
        <Image
          src={"/star.svg"}
          alt="icon"
          width={120}
          height={120}
          className="absolute left-[-10px] top-[-10px] md:left-[-30px] md:top-[-30px]"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
