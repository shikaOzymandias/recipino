import { useState } from "react";
import { useRef } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";

const initialRecipes = [
  {
    name: "Loaded Guacamole Tacos",
    nameLink: "LoadedGuacamoleTacos",
    img: "http://images.soupaddict.com/loaded-guacamole-vegetarian-tacos-3-062214.jpg",
    ingredients: [
      "fresh avocados",
      "black beans",
      "jalapenos",
      "tomatoes or tomatillos",
      "corn or small flour tortillas",
      "corn",
      "lime",
      "cilantro",
    ],
    source: "http://images.soupaddict.com/3-turmeric-drinks-featured.jpg",
  },
  {
    name: "Green Curry",
    nameLink: "GreenCurry",
    ingredients: [
      "coconut milk",
      "carrots",
      "onions",
      "garlic",
      "green curry paste",
      "asparagus",
      "cilantro",
    ],
    img: "http://cookieandkate.com/images/2015/03/thai-green-curry-recipe-0.jpg",
    source:
      "http://cookieandkate.com/2015/thai-green-curry-with-spring-vegetables/",
  },
  {
    name: "Raspberry Chocolate Tart",
    nameLink: "RaspberryChocolateTart",
    ingredients: [
      "raspberry preserves",
      "cocoa powder",
      "fresh raspberries",
      "coconut milk",
      "almond flour",
    ],
    img: "http://www.bakerita.com/wp-content/uploads/2015/06/No-Bake-Raspberry-Chocolate-Truffle-Tart-Paleo-11.jpg",
    source:
      "http://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/",
  },
];
export default function App() {
  const data = initialRecipes;
  const [open, setOpen] = useState(false);

  function handleShowForm() {
    setOpen(!open);
  }

  return (
    <>
      <Header onShowForm={handleShowForm} />
      <RecipesList data={data} />

      <CSSTransition in={open} timeout={300} unmountOnExit>
        <FormAddRecipe open={open} onCloseForm={handleShowForm} />
      </CSSTransition>
    </>
  );
}

function Header({ onShowForm }) {
  return (
    <header className="h-auto w-full p-4 bg-orange-accent flex justify-between">
      <div className="logo flex sm:space-x-1 text-main text-5xl">
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
        <button
          className="py-3 px-1 rounded-xl shadow-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-main text-xl"
          onClick={onShowForm}
        >
          Add Recipe
        </button>
      </div>
    </header>
  );
}

function RecipesList({ data }) {
  return (
    // Recipe List
    <div className="flex w-full bg-mainback pb-80 pt-4 px-10">
      {/* Grid List */}
      <div className="grid mx-auto grid-row-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-20 gap-x-14 mt-10 mb-5 ">
        <Recipe data={data[0]} />
        <Recipe data={data[1]} />
        <Recipe data={data[2]} />
      </div>
    </div>
  );
}

function Recipe({ data }) {
  return (
    <div className="w-64 bg-yellow-accent shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={data.img}
        alt={data.name}
        className="h-96 w-au object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-64">
        <span className="text-lg font-bold text-mainback block capitalize text-center">
          {data.name}
        </span>
      </div>
    </div>
  );
}

function FormAddRecipe({ open, onCloseForm }) {
  return (
    // BackDrop
    <div
      className={`fixed z-10 inset-0 flex justify-center items-center ${
        open ? "bg-black/20" : ""
      }`}
    >
      {/* Modalw */}
      <div
        className={`tab bg-white w-1/2 p-6 rounded shadow transition-all duration-500 ${
          !open ? "opacity-0 transform -translate-y-full scale-150" : ""
        }`}
      >
        <div className="flex justify-end">
          <button
            id="closeContactForm"
            className="text-gray-700 hover:text-red-500"
            onClick={onCloseForm}
          >
            X
          </button>
        </div>
        <h2 className="text-2xl text-mainback font-bold mb-8">
          Add New Recipe
        </h2>

        {/* Form */}

        <form className="text-xs md:text-2xl">
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback"
            placeholder="Recipe Title"
          />
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback"
            placeholder="Recipe Source"
          />
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback"
            placeholder="Recipe Picture"
          />
          <input
            type="text"
            className="w-full p-2 mb-8 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback"
            placeholder="Enter ingredients seprated by comma"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full rounded-lg bg-yellow-accent p-2 py-3 text-lg font-medium text-mainback outline-none hover:bg-yellow-400 duration-200"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
