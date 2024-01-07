import Image from "next/image";

const CommentCard = () => {
  return (
    <div className="flex flex-col items-center justify-between py-8 px-5 md:px-24 w-full h-max md:h-[20em] rounded-2xl border border-[#212121]">
      <Image src={"/quote.svg"} alt="logo" width={50} height={50} />
      <p className="text-primary text-sm text-center">
        Most people can go anywhere to exercise just to say I worked out. If
        you’re looking for an experience that will help you become your best
        self and not by standards of social media then Strength Place is it.
        Training with David and working out at Strength Place has added value to
        what I thought I knew about healthy living. It’s not just lifting some
        weights, it’s about your mental and physical alignment. David helps you
        to discover what that is for you. Without his consistent approach, I’ll
        just be another person at the gym without any real knowledge of how
        important weightlifting impacts my overall sense of self.
      </p>
      <div className="flex flex-col items-center">
        <p className="font-semibold text-[#EE1B24]">Patrcia Nelson</p>
        <p className="text-xs text-primary">Client</p>
      </div>
    </div>
  );
};

export default CommentCard;
