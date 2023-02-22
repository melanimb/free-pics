const SearchbarContainer = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-96 relative bg-[url('../public/images/lotus.jpg')] bg-no-repeat bg-cover">
      <h1 className="absolute top-16 sm:top-24 text-white text-4xl tracking-wide font-extrabold">FreePics</h1>
      {children}
    </div>
  );
};
export default SearchbarContainer;
