import React,{useState} from "react";
import Axios from "axios";
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import "bootstrap/dist/css/bootstrap.css";

function App() {
 const [search,setSearch] = useState("");
 const [recipes, setRecipes] = useState([]);

 const YOUR_APP_ID = "68739aa2";
 const YOUR_APP_KEY = "eafc6f3681e5c2fbbcafc4329192c043";
 var url = `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

 function onInputChange(e){
   setSearch(e.target.value);
 }

 async function getRecipes() {
  var result = await Axios.get(url);
   setRecipes(result.data.hits);
   console.log(result.data.hits);
}

 function handleSubmit(event){
   event.preventDefault();
   getRecipes();
 }

  return (
    <div className="App">
      <Header search={search}
           onInputChange={onInputChange}
           handleSubmit={handleSubmit}
      />

<div className="app_recipes">
        {recipes.map((recipe) => {
            return <Recipes  recipe={recipe} />
          }
          )}
      </div>
    </div>
  );
}

export default App;
