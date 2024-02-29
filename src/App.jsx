import { ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";

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
    source: "http://soupaddict.com/2014/06/loaded-guacamole-vegetarian-tacos/",
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
  let data = initialRecipes;
  return (
    <>
      <Header />
      <RecipesList data={data} />
    </>
  );
}

function Header() {
  return (
    <header className="h-auto w-full p-4 bg-orange-accent flex justify-between">
      <div className="logo flex sm:space-x-4. text-main text-5xl">
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

function RecipesList({ data }) {
  return (
    // Recipe List
    <div className="w-full bg-mainback pb-80 pt-4 px-6 mx-auto ">
      {/* Grid List */}
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
        <Recipe data={data} />
      </div>
    </div>
  );
}

function Recipe({ data }) {
  return (
    <div className="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={data[0].img}
        alt={data[0].name}
        className="h-80 object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-64">
        <span className="text-lg font-bold text-mainback block truncate capitalize">
          {data[0].name}
        </span>
      </div>
    </div>
  );
}
