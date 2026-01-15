
import { Link } from "react-router-dom";

export default function ProjectDetail() {
  return (
    <>
      <nav className="flex flex-col h-[15svh] mb-2  ">
        <Link
          to="/"
          className="self-end text-customGreen text-lg md:text-4xl hover:text-green-800"
        >
          Home
        </Link>
      </nav>
      <div className="w-screen h-screen flex flex-col ">
        <h1 className="text-5xl m-2 md:text-8xl">Pony Express</h1>
        <div className=" w-full h-1/2 "></div>
      </div>
    </>
  );
}
