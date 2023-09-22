import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  imageUri: string;
  title: string;
  description: string;
  direction: "row" | "row-reverse";
}

const HorizontalCard = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-10 md:gap-20 px-20 w-full min-h-[100vh]  md:min-h-max",
        `${props.direction === "row" ? "md:flex-row" : "md:flex-row-reverse"} `
      )}
    >
      <div className="relative w-[600px] h-[500px] flex flex-1">
        <Image
          src={props.imageUri}
          alt="icon"
          fill
          className="object-contain rounded-[50px] min-w-[600px] min-h-[320px] md:min-w-max md:min-h-max"
        />
      </div>
      <div className="flex justify-center px-8 md:px-0 gap-8 min-w-[100dvw] md:min-w-max flex-col flex-1">
        <Image src={"/star.svg"} alt="icon" width={80} height={80} />
        <h1 className="text-4xl font-bold">{props.title}</h1>
        <p className="text-primary text-sm md:max-w-[50ch]">
          {props.description}
        </p>
        <Button
          variant={"ghost"}
          className="bg-[#EE1B24] text-white hover:text-white w-[9em] rounded-[50px]"
        >
          Join Now
        </Button>
      </div>
    </div>
  );
};
export default HorizontalCard;
