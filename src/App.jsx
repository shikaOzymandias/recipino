import { ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";

export default function App() {
  return <Nav />;
}

function Nav() {
  return (
    <nav className="h-auto w-full p-4 bg-orange-accent flex justify-between">
      <div className="logo flex space-x-2 text-main text-4xl">
        <span>
          <ImSpoonKnife />
        </span>
        <span className="font-lobster hidden md:block tracking-widest">
          Recipino
        </span>
        <span>
          <RiKnifeFill />
        </span>
      </div>

      <div className="">
        <button className="py-1 px-2 rounded-lg shadow-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-main text-lg">
          Add Recipe
        </button>
      </div>
    </nav>
  );
}
