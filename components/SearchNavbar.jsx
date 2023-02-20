const SearchNavbar = () => {
  return (
    <div>
      <form>
      <label className="relative" htmlFor="searchInput">
            <span className="absolute inset-y-1 right-5 flex  items-center pl-2">
              <svg
                className="h-5 w-5 fill-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </span>
            <input
              className="h-10 w-32 pl-6 bg-gray-100 text-gray-800 rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ring-opacity-50 shadow-md"
              placeholder="Search"
              type="text"
              id="searchInput"
            />
          </label>
      </form>
    </div>
  );
};
export default SearchNavbar;
