import Link from "next/link";
import SearchNavbar from "./SearchNavbar";

const Navigator = ({ pathNames }) => {
  return (
    <nav className="flex justify-between p-3 bg-slate-700 shadow-lg">
      <div className="flex items-center gap-4 ml-3">
        <p className="hidden md:inline text-white font-semibold text-xl tracking-wide">FreePics</p>
        <SearchNavbar />
      </div>
      <ul className="hidden sm:flex gap-4 mr-3 items-center text-white">
        {pathNames.map((pathName) => (
          <li className="bg-slate-600 hover:bg-slate-500 transition ease-in duration-200 cursor-pointer py-2 px-4 rounded-2xl" key={pathName.name}>
            <Link key={pathName.path} href={pathName.path}>
              {pathName.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navigator;
