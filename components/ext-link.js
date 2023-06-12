import Link from "next/link";

export default function ExternalLink({ route, children }) {
  return (
    <Link legacyBehavior href={route} ><a className="flex relative px-8 py-2 text-orange-200 bg-black bg-opacity-0 rounded-full hover:bg-opacity-10 transition duration-200">{children}
    </a></Link>
  );
}
