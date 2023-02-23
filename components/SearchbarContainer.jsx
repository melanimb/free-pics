import HeroImage from "./HeroImage";

const SearchbarContainer = ({ children }) => {
  return (
    <>
      <HeroImage />
      <div className="flex flex-col sm:flex-row justify-center items-center h-[32rem] relative left-0 right-0 z-40">
        <h1 className="absolute top-28 sm:top-36 text-white text-4xl tracking-wide font-extrabold">
          FreePics
        </h1>
        {children}
      </div>
    </>
  );
};
export default SearchbarContainer;
