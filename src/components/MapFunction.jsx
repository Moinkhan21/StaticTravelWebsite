import React from 'react'

const MapFunction = () => {

    const nums = [1, 2, 3, 4, 5];

    const squares = nums.map(num => {
        return num * num
    })

    console.log(squares);

    const names = ["Alice", "Bob", "Charlie"];

    const capitalized = names.map((name) => {
        return name[0].toUpperCase() + name.slice(1)
    })

    console.log(capitalized);

    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

    const paragraphs = pokemon.map((mon) => {
        return `<p>${mon}</p>`
    })

    console.log(paragraphs);

  return (
    <>
        <h1>Squares</h1>
        
        
    </>
  )
}

export default MapFunction