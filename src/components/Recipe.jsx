import React from 'react'

function Recipe({title, calories, image, ingredients}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
            <ol style={{listStyle: "none"}}>
                {
                    ingredients.map((item, index) => (
                        <li key={index}>{item.text}</li>
                    ))
                }
            </ol>
        </div>
    )
}

export default Recipe
