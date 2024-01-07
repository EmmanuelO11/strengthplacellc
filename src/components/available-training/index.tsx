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
        <TrainingCard
          title="General Public Training"
          description="Designed to help individuals achieve their fitness and wellness goals in a supportive and inclusive environment. 
          Our program offers personalized workouts, nutritional guidance, and lifestyle coaching to help you lead a healthier and more active life."
        />
        <TrainingCard
          title="Youth Athletes"
          description="We focus on developing young athletes through comprehensive and individualized training. 
          Emphasis in skill development, strength training, agility, and injury prevention, all under the guidance of experienced coaches."
          imagePath="/youth_athlete.jpg"
        />
        <TrainingCard
          title="Senior Strength"
          description="Dedicated to promoting health, mobility, and vitality in our aging community. 
          Focuses on safe and effective exercises, functional movement training, and personalized support to help seniors live life to the fullest and maintain independence."
        />
        <TrainingCard
          title="Strength Athletes"
          description="Tailored to empower athletes in building strength and performance. 
          Combines advanced strength and conditioning techniques and expert coaching to help athletes reach their full potential."
        />
      </div>
    </div>
  );
};

export default AvailableTrainingComponent;
