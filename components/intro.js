import Image from "next/image";
import { CMS_NAME, CMS_URL } from "../lib/constants";
import logo from "../public/logo.png";
import boi from "../public/boi.png";
import Spline from "@splinetool/react-spline";

export default function Intro() {
  return (
    <section className="min-h-[100vh] bg-[#3702E4]  flex-col flex justify-between items-center overflow-hidden">
      <Spline scene="https://prod.spline.design/vIgYKAHpdvdu7qlX/scene.splinecode" />
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
