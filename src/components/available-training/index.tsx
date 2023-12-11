import Title from "../ui/title";
import TrainingCard from "./training-card";

const AvailableTrainingComponent = () => {
  return (
    <div
      id="coaching"
      className="w-full flex flex-col items-start px-10 md:px-20 gap-8"
    >
      <Title text={"Available Training Services"} />

      <p className="text-sm text-primary max-w-[80ch]">
        Explore below to join one of our amazing training communities. Learn
        more about how we can help you improve and get you one step closer to
        success.
      </p>
      <div className="flex overflow-x-scroll w-full pb-4 gap-8">
        <TrainingCard title="Strength Athletes" />
        <TrainingCard title="Youth Athletes" imagePath="/youth_athlete.jpg" />
        <TrainingCard title="Cross Functional Athletes" />
        <TrainingCard title="Senior Strength" />
      </div>
    </div>
  );
};

export default AvailableTrainingComponent;
