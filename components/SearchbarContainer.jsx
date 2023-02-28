import Link from "next/link";
import HeroImage from "./HeroImage";

const SearchbarContainer = ({ children }) => {
  return (
    <>
      <HeroImage />
      <div className="flex flex-col sm:flex-row justify-center items-center h-[32rem] mt-16 relative left-0 right-0 z-30">
        <h1 className="absolute top-28 sm:top-36 text-white text-4xl tracking-wide font-extrabold">
          FreePics
        </h1>
        {children}
        <Link href="https://www.pexels.com" className="text-white absolute bottom-2 left-4">Photos provided by Pexels</Link>
      </div>
    </>
  );
};
export default SearchbarContainer;
