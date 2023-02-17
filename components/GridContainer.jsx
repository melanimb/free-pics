const GridContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 lg:gap-x-8">
      {children}
    </div>
  );
};
export default GridContainer;
