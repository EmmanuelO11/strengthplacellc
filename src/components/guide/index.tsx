import Image from "next/image";
import Title from "../ui/title";

const Guide = () => {
  return (
    <div className="w-full h-[30em] bg-black flex flex-col text-white items-center px-[15%] md:px-[25%] justify-center gap-8">
      <Image src={"/quote.svg"} alt="logo" width={80} height={80} />
      <Title
        text={"Your Ultimate Guide to Gym and Fitness"}
        align="center"
        color="white"
      />
      <p className="text-center">
        The last three or four reps is what makes the muscle grow. This area of
        pain divides a champion from someone who is not a champion
      </p>
      <p className="text-xs text-[#EE1B24]">- Arnold Schwarzenegger</p>
    </div>
  );
};

export default Guide;
