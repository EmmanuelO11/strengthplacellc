import HorizontalCard from "../common/horizontal-card";

const AboutComponent = () => {
  return (
    <HorizontalCard
      id="about"
      imageUri="/about.jpg"
      title="About Us"
      direction="row"
      description="Strength Place Fitness Center is a private gym located in Lansing, a
                    south suburb of Chicago and near NorthWest Indiana. Strength Place
                    welcomes individuals from all walks of life with the common goal of
                    purpose driven training to improve overall health and well-being.
                    Strength Place was founded upon the ideals that through strength we
                    can become proactive with our health and prepare ourselves for a long
                    quality lifespan because STRENGTH IS MEDICINE"
    />
  );
};

export default AboutComponent;
