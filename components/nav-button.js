import Link from "next/link";

export default function NavButton({ route, children }) {
  return (
    <Link href={route} className="flex relative px-8 py-4 text-orange-200 bg-black bg-opacity-25 rounded-full hover:bg-opacity-30">{children}
    </Link>
  );
}
