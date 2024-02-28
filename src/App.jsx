import { ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";

export default function App() {
  return (
    <>
      <Header />
      <RecipesList />
    </>
  );
}

function Header() {
  return (
    <header className="h-auto w-full p-4 bg-orange-accent flex justify-between">
      <div className="logo flex sm:space-x-4 text-main text-5xl">
        <span>
          <ImSpoonKnife />
        </span>
        <span className="font-lobster tracking-widest hidden sm:block">
          Recipino
        </span>
        <span>
          <RiKnifeFill />
        </span>
      </div>

      <div>
        <button className="py-3 px-1 rounded-xl shadow-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-main text-xl">
          Add Recipe
        </button>
      </div>
    </header>
  );
}

function RecipesList() {
  return (
    <div className="w-full bg-mainback pb-32 pt-4 px-6">
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
        <div className="w-64 h-auto border border-blue-600 bg-blue-100">01</div>
      </div>
    </div>
  );
}
