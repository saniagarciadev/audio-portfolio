import Link from "next/link";
import NavButton from "./nav-button";
import Image from "next/image";
import soundcloudIcon from "../public/soundcloud-icon.svg";
import igIcon from "../public/ig-icon.svg";
import twitterIcon from "../public/twitter-icon.svg";
import ExternalLink from "./ext-link";

export default function Header() {
  return (
    <nav className="relative w-fit mx-auto z-10 py-5 sm:p-10  flex gap-4">
      {/* <NavButton route="/">:)</NavButton>
      <NavButton route="/">Tracks</NavButton>
      <NavButton route="/">Sets</NavButton>
      <NavButton route="/">About</NavButton> */}
      <ExternalLink route="https://soundcloud.com/biensurr"><Image
      priority
      src={soundcloudIcon}
      alt="Soundcloud"
    /></ExternalLink>
      <ExternalLink route="https://www.instagram.com/lex_klein_"><Image
      priority
      src={igIcon}
      alt="Instagram"
    /></ExternalLink>
      <ExternalLink route="https://twitter.com/thickassdj"><Image
      priority
      src={twitterIcon}
      alt="Twitter"
    /></ExternalLink>
    </nav>
  );
}
