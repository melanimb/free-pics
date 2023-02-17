import Link from "next/link";

const Navigator = ({ pathNames }) => {
  return (
    <nav>
      <ul>
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
