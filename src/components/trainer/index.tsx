import Image from "next/image";
import Title from "../ui/title";

const TrainerComponent = () => {
  return (
    <div
      id="trainer"
      style={{
        background: "url('/trainer-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
      className="flex flex-col items-center justify-center gap-12 "
    >
      <Title text={"Trainer"} align="center" color="white" />
      <Image
        src={"/trainer.jpg"}
        alt="trainer"
        className="rounded-[50px]"
        width={350}
        height={500}
      />
      <div className="flex flex-col items-center justify-center text-white">
        <h1>Martin Gouse</h1>
        <div className="flex items-center ">
          <p className="pr-4">Rate gym</p>
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={"/star-2.svg"}
              alt="icon"
              width={20}
              height={20}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerComponent;
