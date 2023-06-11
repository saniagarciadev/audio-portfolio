import Link from "next/link";
import NavButton from "./nav-button";

export default function Header() {
  return (
    <nav className="relative w-fit mx-auto z-10 p-10  flex gap-4">
      <NavButton route="/">:)</NavButton>
      <NavButton route="https://soundcloud.com/biensurr">Soundcloud</NavButton>
      <NavButton route="https://www.instagram.com/lex_klein_">Instagram</NavButton>
      <NavButton route="https://twitter.com/thickassdj">Twitter</NavButton>
    </nav>
  );
}
