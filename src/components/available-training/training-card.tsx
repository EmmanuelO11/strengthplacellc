import Image from "next/image";

type TrainingCardProps = {
  title: string;
  imagePath?: string;
  description?: string;
};

const TrainingCard: React.FC<TrainingCardProps> = ({
  title,
  imagePath = "/training.jpg",
  description,
}) => {

  return (
    <div className="flex min-w-[30em] min-h-[12em] p-6 rounded-2xl border border-[#212121]">
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col">
          <h1 className="text-lg">{title}</h1>
          {description && (
            <p className="text-sm mt-2 mr-4" style={{ fontSize: 12 }}>
              {description}
            </p>
          )}
          <div className="mt-3" style={{ cursor: "pointer" }}>
            <a
              href="https://strengthplace.gymmasteronline.com/portal/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/play-black.svg"}
                alt="icon"
                width={30}
                height={30}
              />
            </a>
          </div>
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
