import Image from "next/image";

type TrainingCardProps = {
  title: string;
  imagePath?: string; 
};

const TrainingCard: React.FC<TrainingCardProps> = ({ title, imagePath = "/training.jpg" }) => {
  return (
    <div className="flex min-w-[30em] min-h-[12em] p-6 rounded-2xl border border-[#212121]">
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <h1 className="text-lg">{title}</h1>
        </div>
      </div>
      <Image
        src={imagePath}
        className="rounded-lg"
        alt="icon"
        width={200}
        height={200}
      />
    </div>
  );
};

export default TrainingCard;
