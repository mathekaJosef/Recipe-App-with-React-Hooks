import React, {useEffect, useState} from 'react'
import Recipe from './components/Recipe'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Row, Col} from 'reactstrap'
import { FaSearch } from 'react-icons/fa';

const App = () => {
  const APP_ID = "8860c87c"
  const APP_KEY = "c699945640a70760eb61682c92bcc4fa"

  //const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query]) //the empty array avoids reloading

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    console.log(data.hits)
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    //
    setSearch('')
  }

  return (
    <div className="App" style={{margin: 10}}>
      <form onSubmit={getSearch} className="search-form">

        <div className="input-group">
            <input 
              type="text" 
              className="form-control border-light bg-muted" 
              placeholder="Search Posts"
              value={search}
              onChange={updateSearch}
              style={{borderRadius: "45px"}}
            />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-default"><FaSearch/></button>
            </span>
        </div>


      </form>

      <Row>
        <Col sm="2"></Col>
        <Col sm="8">
          <Row>
            {recipes.map((recipe, index) => (
              <Recipe
                key={index}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            ))}
          </Row>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </div>
  );
}

export default App;
