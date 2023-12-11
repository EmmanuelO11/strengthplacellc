import Image from "next/image";
import CommentCard from "./comment-card";

const CommentsComponent = () => {
  return (
    <div className="flex flex-col items-center w-full px-10 md:px-20 gap-10">
      <Image src={"/star.svg"} alt="logo" width={100} height={100} />
      <h1 className="text-2xl md:text-5xl font-bold uppercase text-center max-w-[20ch]">
        Why People Love Strength Place
      </h1>
      <CommentCard />
    </div>
  );
};

export default CommentsComponent;
