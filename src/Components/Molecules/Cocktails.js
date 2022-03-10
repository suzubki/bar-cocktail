
import React from 'react'
import CardItem from '../Atoms/CardItem'


const Cocktails = ({ listCocktails }) => {
  return (
    <>
      {
        listCocktails.map(cockTail => {
          return <CardItem
            key={cockTail.idDrink}
            id={cockTail.idDrink}
            image={cockTail.strDrinkThumb}
            name={cockTail.strDrink}
          />
        })
      }
    </>
  )
}

export default Cocktails