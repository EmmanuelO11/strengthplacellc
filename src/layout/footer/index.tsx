import Image from "next/image";

const Footer = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-2 w-screen h-max md:h-[50vh] md:px-20 px-10 gap-10 md:gap-0 p-[2em] py-10"
    >
      <div className="flex flex-col col-span-2 md:col-span-1 gap-4 md:gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-16">
          <Image src={"/navbar/icon.svg"} alt="icon" width={200} height={200} />
          <p className="text-[#444444] font-normal text-sm">
            Sign up for updates from Strength Place LLC
          </p>
        </div>
        <div className="flex items-center md:items-start md:flex-col gap-5">
          <p>Social Links</p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/profile.php?id=61550089335422&mibextid=LQQJ4d"
              target="_blank" rel="noopener noreferrer"
            >
            <Image
              src={"/footer/facebook.svg"}
              alt="icon"
              className="cursor-pointer"
              width={30}
              height={30}
            />
            </a>
            <a href="https://instagram.com/_strengthplace?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank" rel="noopener noreferrer"
            >
              <Image
              src={"/footer/instagram.svg"}
              alt="icon"
              className="cursor-pointer"
              width={30}
              height={30}
            />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end col-span-2 md:col-span-1 gap-12">
        <div className="flex w-full md:w-[65%] h-[2.8em] rounded-md overflow-hidden border border-[#DBDBDB]">
          <input
            type="text"
            className="w-[65%] h-full px-2 focus:outline-none placeholder:text-sm"
            placeholder="Your email address"
          />
          <button className="w-[35%] bg-[#EE1B24] text-white">Subscribe</button>
        </div>
        <div className="grid grid-cols-2 w-full md:w-[65%]">
          <div className="flex flex-col gap-5 col-span-1">
            <p className="font-semibold text-[#212121]">Contact Information</p>
            {[
              "ddadzie@strengthplace.net",
              "7085521742",
              "555 NN Willams St, Thornton IL 60476",
            ].map((item, index) => (
              <p
                key={index}
                className="text-sm text-[#444444] cursor-pointer break-words"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
