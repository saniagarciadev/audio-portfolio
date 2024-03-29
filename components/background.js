import Spline from "@splinetool/react-spline";


export default function Background() {
  return (
    <div className="fixed top-0 left-0 right-0 z-0 w-full h-full flex flex-wrap justify-center content-center bg-[#3702E4]">
      <div className="h-[100vw] w-[100vw] sm:h-[40vw] sm:w-[40vw] mb-[20%]">
      <Spline scene="https://draft.spline.design/EH4dEQdiiAJ1coyc/scene.splinecode" />
      </div>
    </div>
  );
}
