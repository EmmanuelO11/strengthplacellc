import Image from "next/image";

const TrainingCard = () => {
  return (
    <div className="flex min-w-[30em] min-h-[12em] p-6 rounded-2xl border border-[#212121]">
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <h1 className="text-lg">Senior Strength</h1>
          <p className="text-sm text-[#EE1B24]">30+ people</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="uppercase text-sm">Register now</p>
          <Image src={"/play-black.svg"} alt="icon" width={30} height={30} />
        </div>
      </div>
      <Image
        src={"/training.jpg"}
        className="rounded-lg"
        alt="icon"
        width={200}
        height={200}
      />
    </div>
  );
};

export default TrainingCard;
