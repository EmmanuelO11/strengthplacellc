import Title from "../ui/title";
import TrainingCard from "./training-card";

const AvailableTrainingComponent = () => {
  return (
    <div className="w-full flex flex-col items-start px-10 md:px-20 gap-8">
      <Title text={"Available Training Services"} />

      <p className="text-sm text-primary max-w-[80ch]">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt
      </p>
      <div className="flex overflow-x-scroll w-full pb-4 gap-8">
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
        <TrainingCard />
      </div>
    </div>
  );
};

export default AvailableTrainingComponent;
