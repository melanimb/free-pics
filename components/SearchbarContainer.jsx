const SearchbarContainer = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center h-96 relative">
      <h1 className="absolute top-24 text-4xl tracking-wide font-extrabold">FreePics</h1>
      {children}
    </div>
  );
};
export default SearchbarContainer;
