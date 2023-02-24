import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Icon from "./Icon";
import SearchNavbar from "./SearchNavbar";

const Navigator = ({ pathNames }) => {
  return (
    <nav className="flex justify-between p-3 bg-slate-700 shadow-lg fixed left-0 right-0 z-50">
      <div className="flex items-center gap-4 ml-3">
        <p className="hidden md:inline text-white font-semibold text-xl tracking-wide">
          FreePics
        </p>
        <SearchNavbar />
      </div>
      <button>
        <Icon icon={faBars} css='h-8 m-2 sm:hidden text-white'></Icon>
      </button>
      <ul className="hidden sm:flex gap-4 mr-3 items-center text-white">
        {pathNames.map((pathName) => (
          <li
            className="bg-slate-600 hover:bg-slate-500 transition ease-in duration-200 cursor-pointer py-2 px-4 rounded-2xl"
            key={pathName.name}
          >
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
