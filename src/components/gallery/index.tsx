import Image from "next/image";
import Title from "../ui/title";

const GalleryComponent = () => {
  return (
    <div className="flex w-full flex-col px-10  md:px-20 h-[50em] gap-12">
      <div className="flex flex-col md:flex-row w-full items-center justify-between">
        <Title text={"OUR GALLERY"} />
      </div>
      <div className="w-full h-[100%] grid grid-cols-7 grid-rows-2 gap-5">
        <div className="flex flex-col col-span-7 md:col-span-4 row-span-1 md:row-span-2 w-full  gap-5 h-full">
          <div className="h-[50%] w-full relative">
            <ImageCard imgNo={1} />
          </div>
          <div className="grid grid-cols-3 gap-5 h-[50%] w-full">
            {[2, 3, 4].map((item, idx) => (
              <div key={idx} className="col-span-1 relative">
                <ImageCard imgNo={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="h-[100%] w-full grid grid-rows-3 gap-5 col-span-7 md:col-span-3 row-span-2">
          {[5, 6, 7].map((item, idx) => (
            <div key={idx} className="row-span-1 relative">
              <ImageCard imgNo={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function ImageCard({ imgNo }: { imgNo: number }) {
  return (
    <Image
      src={`/gallery/${imgNo}.jpg`}
      alt="icon"
      fill
      className="object-cover rounded-2xl"
    />
  );
}

export default GalleryComponent;
