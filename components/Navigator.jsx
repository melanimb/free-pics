import Link from "next/link";
import SearchNavbar from "./SearchNavBar";

const Navigator = ({ pathNames }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <p>PicsFree</p>
        <SearchNavbar />
      </div>
      <ul style={{ display: "flex", gap: "15px" }}>
        {pathNames.map((pathName) => (
          <li key={pathName.name}>
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
