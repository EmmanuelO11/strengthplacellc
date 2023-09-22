const Title = ({
  text,
  color = "black",
  align = "left",
}: {
  text: string;
  color?: "black" | "white";
  align?: "left" | "center" | "right";
}) => {
  return (
    <h1
      className="text-2xl md:text-5xl font-bold uppercase"
      style={{ color, textAlign: align }}
    >
      {text}
    </h1>
  );
};

export default Title;
