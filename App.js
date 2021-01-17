import React,{useState,useEffect} from 'react';
import './App.css';
import Recipe from'./recipe'
import Header from './header'
const App=() =>{
  const API_ID="34d8ca01"
  const API_KEY="0e4256f7a2cf7ccd35ced97f339ab518	"
 
 
  const[search,setSearch]=useState("")
  const[recipes,setRecipes]=useState([])
  const[query,setQuery]=useState("peanuts")



  useEffect(()=>{
    getRecipe();
    },[query]);
  const getRecipe = async ()=>{
        const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
        const data= await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
  }
 const update= e =>{
        setSearch(e.target.value)
 }
 const getSearch=e=>{
   e.preventDefault()
   setQuery(search)
   setSearch(' ')
 }

  return(
    <div>
   <Header/>
    <div className="App">
      <form className='search-form'
      onSubmit={getSearch}
      >
        <input className='search-bar' 
          type="text" 
          value={search} 
          onChange={update}
        />
        <button className='search-button' type="submit">
          search
        </button>
      </form>
      <div className='recipe'>
      {recipes.map(recipe =>(
        <Recipe 
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
    </div>
  )
}

export default App;
