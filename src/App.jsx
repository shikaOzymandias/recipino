import { useState } from "react";
import { useRef } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { RiKnifeFill } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";

const initialRecipes = [
  {
    title: "Loaded Guacamole Tacos",
    nameLink: "LoadedGuacamoleTacos",
    image:
      "http://images.soupaddict.com/loaded-guacamole-vegetarian-tacos-3-062214.jpg",
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
    title: "Green Curry",
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
    image:
      "http://cookieandkate.com/images/2015/03/thai-green-curry-recipe-0.jpg",
    source:
      "http://cookieandkate.com/2015/thai-green-curry-with-spring-vegetables/",
  },
  {
    title: "Raspberry Chocolate Tart",
    nameLink: "RaspberryChocolateTart",
    ingredients: [
      "raspberry preserves",
      "cocoa powder",
      "fresh raspberries",
      "coconut milk",
      "almond flour",
    ],
    image:
      "http://www.bakerita.com/wp-content/uploads/2015/06/No-Bake-Raspberry-Chocolate-Truffle-Tart-Paleo-11.jpg",
    source:
      "http://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/",
  },
  {
    title: "Kebab Sand",
    nameLink: "RaspberryChocolateTart",
    ingredients: [
      "raspberry preserves",
      "cocoa powder",
      "fresh raspberries",
      "coconut milk",
      "almond flour",
    ],
    image:
      "https://media.istockphoto.com/id/912629972/photo/chicken-kebab-with-bell-pepper.jpg?s=1024x1024&w=is&k=20&c=knCC5g2sD3dZ81P39HF0GnyD9DlZsEjPGBrhN0VUw7U=",
    source:
      "http://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/",
  },
  {
    title: "Kebab Sand",
    nameLink: "RaspberryChocolateTart",
    ingredients: [
      "raspberry preserves",
      "cocoa powder",
      "fresh raspberries",
      "coconut milk",
      "almond flour",
    ],
    image:
      "https://media.istockphoto.com/id/176767997/photo/kebabs.jpg?s=1024x1024&w=is&k=20&c=ql1weY6nGlqp0CwtBXUqKYMCY3Wr3XQ3eQKUZ9GJoxw=",
    source:
      "http://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/",
  },
];

export default function App() {
  const data = initialRecipes;
  const [open, setOpen] = useState(false);
  const [recipes, setRecipes] = useState(data);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleShowForm() {
    setOpen((open) => !open);
  }

  function handleAddRecipe(recipe) {
    setRecipes((recipes) => [...recipes, recipe]);
    setOpen(false);
  }

  function handleSelection(recipe) {
    setSelectedRecipe(recipe);
  }
  return (
    <>
      <Header onShowForm={handleShowForm} />

      {!selectedRecipe && (
        <RecipesList
          recipes={recipes}
          onSelection={handleSelection}
          selectedRecipe={selectedRecipe}
        />
      )}
      {selectedRecipe && (
        <RecipeCatalog recipe={selectedRecipe} onSelection={handleSelection} />
      )}

      <CSSTransition in={open} timeout={300} unmountOnExit>
        <FormAddRecipe
          open={open}
          onCloseForm={handleShowForm}
          onAddRecipe={handleAddRecipe}
        />
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
        <span className="font-lobster tracking-widest hidden md:block">
          Recipino
        </span>
        <span>
          <RiKnifeFill />
        </span>
      </div>

      <div>
        <button
          className="py-3 px-1 rounded-xl shadow-sm font-medium bg-yellow-accent hover:bg-yellow-200 text-main text-xl transition-all duration-200"
          onClick={onShowForm}
        >
          Add Recipe
        </button>
      </div>
    </header>
  );
}

function RecipesList({ recipes, onSelection }) {
  return (
    // Recipe List
    <div className="flex w-full bg-mainback pb-80 pt-4 px-10">
      {/* Grid List */}
      <ul className="grid mx-auto grid-row-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-20 gap-x-14 mt-10 mb-5 ">
        {recipes.map((rec) => (
          <Recipe recipe={rec} key={rec.name} onSelection={onSelection} />
        ))}
      </ul>
    </div>
  );
}

function Recipe({ recipe, onSelection }) {
  return (
    <li
      className="w-64 bg-yellow-accent shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={() => onSelection(recipe)}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-96 w-auto object-cover rounded-t-xl"
      />
      <div className="px-4 py-3 w-64">
        <span className="text-lg font-bold text-mainback block capitalize text-center">
          {recipe.title}
        </span>
      </div>
    </li>
  );
}

function RecipeCatalog({ recipe, onSelection }) {
  const ingredients = recipe.ingredients;
  return (
    // Container
    <div className="bg-mainback py-8 px-12 pb-24 sm:px-12">
      {/* Recipe */}
      <div
        className="max-w-6xl mx-auto bg-yellow-100
      shadow-[3px_5px_10px_-3px_rgba(0,0,0,0.5)] border border-gray-100 px-8 py-8 flex flex-col lg:flex-row"
      >
        {/* Image */}
        <div className="md:flex-1 px-4 my-auto">
          <div className="flex justify-end">
            <button
              className="text-4xl text-mainback hover:text-orange-accent mb-4 block lg:hidden"
              onClick={() => onSelection(null)}
            >
              X
            </button>
          </div>
          <div className="w-auto mx-auto mb-4">
            <img className="w-full object-fill rounded-lg" src={recipe.image} />
          </div>
        </div>

        {/* Recipe Info */}
        <div className="md:flex-1 px-4 text-main">
          {/* Close btn */}
          <div className="flex justify-end">
            <button
              className="text-4xl text-mainback hover:text-orange-accent hidden lg:block"
              onClick={() => onSelection(null)}
            >
              X
            </button>
          </div>

          {/* Food Name */}
          <h2 className="text-4xl text-center text-orange-accent font-normal mt-4 mb-10">
            {recipe.title}
          </h2>

          {/* Action Buttons */}
          <div className="flex justify-between font-light mb-4">
            <button className="bg-orange-accent hover:bg-orange-400 text-white py-2 px-8 rounded text-xl transition-all duration-100 mx-1">
              <a href={recipe.source} target="_blank">
                Source
              </a>
            </button>
            <button className="bg-orange-accent hover:bg-orange-400 text-white py-2 px-8 rounded text-xl transition-all duration-100 mx-1">
              Edit
            </button>
            <button className="bg-orange-accent hover:bg-orange-400 text-white py-2 px-8 rounded text-xl transition-all duration-100 mx-1">
              Delete
            </button>
          </div>

          {/* Ingeridients */}
          <div className="w-full bg-orange-light text-mainback py-6 px-6 rounded">
            <h3 className="text-3xl mb-2 tracking-widest font-medium">
              ingredients
            </h3>
            <div className=" ml-2 tracking-wide text-2xl font-normal">
              <ul className="list-inside list-disc">
                {ingredients.map((ing) => (
                  <li>{ing}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormAddRecipe({ open, onCloseForm, onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState("");
  const [source, setSource] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!image || !title) return;

    const id = crypto.randomUUID();

    const newRecipe = {
      id,
      title,
      image,
      ingredients: ingredients.split(","),
      source,
    };

    console.log(newRecipe);
    onAddRecipe(newRecipe);
  }
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
            className="text-4xl text-mainback hover:text-red-500"
            onClick={onCloseForm}
          >
            X
          </button>
        </div>
        <h2 className="text-2xl text-mainback font-bold mb-8">
          Add New Recipe
        </h2>

        {/* Form */}

        <form className="text-xs md:text-2xl" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback"
            placeholder="Recipe Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback cursor-not-allowed"
            placeholder="Recipe Source (Optional)"
            onChange={(e) => setSource(e.target.value)}
          />
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback"
            placeholder="Recipe Image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <input
            type="text"
            className="w-full p-2 mb-8 border rounded-md focus:outline-none focus:border-yellow-200 text-mainback"
            placeholder="Enter ingredients seprated by comma"
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
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
