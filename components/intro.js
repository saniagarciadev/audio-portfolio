import Image from "next/image";
import { CMS_NAME, CMS_URL } from "../lib/constants";
import logo from "../public/logo.png";
import boi from "../public/boi.png";
import Spline from "@splinetool/react-spline";

export default function Intro() {
  return (
    <section className="flex-col flex justify-between items-center overflow-hidden border-2">
      <div className="w-[100vw] py-20 text-[#3702E4] uppercase p-10  flex flex-col gap-10 justify-between items-center"></div>
    </section>
  );
}
