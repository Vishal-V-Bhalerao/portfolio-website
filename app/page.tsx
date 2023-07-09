import Lottie from "react-lottie";
import animationData from "../public/json/144227-minimal-style-3d-sphere-animation.json";
export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="w-screen h-screen bg-black">
      <Lottie options={defaultOptions} height={"100%"} width={"100%"}></Lottie>
    </div>
  );
}
