import React,{useState,useEffect} from 'react'

import Recipe from './Recipe'

import './App.css';


const App=() =>{

   const app_id='42ca74f3'
   const app_key='4c83d98accec5ed4ee7682726d4da968'

   const [recipes,setRecipes]=useState([])
   const [search,setSearch]=useState("")
   const [query,setQuery]=useState("paneer")

   useEffect(()=>{
     getRecipies();

   },[query])

   const getRecipies=async()=>{
     const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`)
     const data = await response.json()
     setRecipes(data.hits)
     console.log(data.hits)
   }

   const updateSearch=(e)=>{
     setSearch(e.target.value)

   }

   const getSearch=(e)=>{
     e.preventDefault()
     setQuery(search)

   }

    


   
  
return (
    <div className="App">
    <form className='form' onSubmit={getSearch}>
      <input type='text' value={search} onChange={updateSearch}/>
      <button className='search'>Search</button>


      
    </form>
    {recipes.map( recipe =>(
      <Recipe 
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      image={recipe.recipe.image} 
      calories={recipe.recipe.calories}

      />
    ))}


      
      
    </div>
  );

}
export default App;
