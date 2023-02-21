const Searchbar = () => {
  return (
    <>
      <div>
        <form>
          <label className="relative">
            <button type="submit" className="absolute inset-y-1 right-5 flex items-center pl-2">
              <svg
                className="h-5 w-5 fill-slate-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
            <input
              className="py-3 px-40 pl-6 sm:py-4 sm:px-72 sm:pl-6 bg-slate-100 text-gray-800 rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-400 ring-opacity-50 shadow-md"
              placeholder="Search for free images"
              type="text"
            />
          </label>
        </form>
      </div>
      <div>
        <button className="mt-5 py-3 px-7 sm:ml-3 sm:mt-0 bg-gradient-to-r from-fuchsia-400 to-blue-500 text-white w-full rounded-lg text-center text-base font-semibold tracking-wide hover:shadow-md">
          Filters
        </button>
      </div>
    </>
  );
};
export default Searchbar;
