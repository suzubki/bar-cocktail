import React from 'react'
import CardItemCocktail from '../Molecules/CardItemCocktail'


const CardGroupCocktail = ({dataCocktails, currentPage}) => {

  let sliceNumber = currentPage*10
  const listCocktails = dataCocktails.slice(sliceNumber, sliceNumber + 10)

  return (
    <>
      {
        listCocktails?.map(cockTail => {
          return <CardItemCocktail
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

export default CardGroupCocktail