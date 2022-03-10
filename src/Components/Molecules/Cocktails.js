import React, {useState, useEffect} from 'react'
import CardItem from '../Atoms/CardItem'

import getCocktails from '../../Helpers/getCocktails'

const Cocktails = () => {

  const [dataCocktails, setDataCocktails] = useState([])

    useEffect(() => {
        getCocktails().then(setDataCocktails)
    }, [])

    let listCocktails =  dataCocktails.splice(0, 10)

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