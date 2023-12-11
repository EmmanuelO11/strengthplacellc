import AboutComponent from "@/components/about";
import AvailableTrainingComponent from "@/components/available-training";
import CommentsComponent from "@/components/comments";
import GalleryComponent from "@/components/gallery";
import Guide from "@/components/guide";
import HomeComponent from "@/components/home";
import MissionComponent from "@/components/mission";
import TrainerComponent from "@/components/trainer";
import Head from "next/head";

export default function Home() {
  return (
    <main className="flex flex-col gap-[3em] md:gap-[8em] items-center max-w-screen overflow-x-hidden">
      <HomeComponent />
      <AboutComponent />
      <MissionComponent />
      <TrainerComponent />
      <AvailableTrainingComponent />
      <GalleryComponent />
      <Guide />
      <CommentsComponent />
    </main>
  );
}
