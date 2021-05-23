import React,{useState,useEffect} from 'react'

import Recipe from './Recipe'

import './App.css';


const App=() =>{

   const app_id='42ca74f3'
   const app_key='4c83d98accec5ed4ee7682726d4da968'

   const [recipes,setRecipes]=useState([])

   useEffect(()=>{
     getRecipies();

   },[])

   const getRecipies=async()=>{
     const response=await fetch(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`)
     const data = await response.json()
     setRecipes(data.hits)

    


   }
  
return (
    <div className="App">
    <form className='form'>
      <input type='text'/>
      <button className='search'>Search</button>


      
    </form>
    {recipes.map( recipe =>(
      <Recipe/>
    ))}


      
      
    </div>
  );

}
export default App;
