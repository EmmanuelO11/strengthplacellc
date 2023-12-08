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
        src={"/trainer.jpeg"}
        alt="trainer"
        className="rounded-[50px]"
        width={350}
        height={500}
      />
      <div className="flex flex-col items-center justify-center text-white">
        <h1>David Dadzie</h1>
        <div className="flex items-center ">
        </div>
      </div>
    </div>
  );
};

export default TrainerComponent;
