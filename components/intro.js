import Image from "next/image";
import { CMS_NAME, CMS_URL } from "../lib/constants";
import logo from "../public/logo.png";

export default function Intro() {
  return (
    <section className="min-h-[100vh] py-10 px-10 bg-[#3702E4]  flex-col flex justify-between items-center">
      {/* <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        BIEN SÛR
      </h1> */}
      <div className="w-[100vw] flex justify-center items-center">
        <div className="w-[700px] max-w-[100vw] m-8">
          <Image src={logo} alt="Bien Sûr logo" />
        </div>
      </div>
      <div className="w-[100vw] py-20 text-[#3702E4] uppercase p-10  flex flex-col gap-10 justify-between items-center">
        <a
          href="https://soundcloud.com/biensurr"
          className="px-3 bg-black hover:text-pink-400 duration-200 transition-colors"
        >
          Soundcloud
        </a>
        <a
          href="https://twitter.com/thickassdj"
          className="px-3 bg-black hover:text-pink-400 duration-200 transition-colors"
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/lex_klein_/"
          className="px-3 bg-black hover:text-pink-400 duration-200 transition-colors"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
