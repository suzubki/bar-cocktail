import React, {useState, useEffect} from 'react'
import getCocktails from '../../Helpers/getCocktails'
import PaginationSlider from '../Molecules/PaginationSlider'

import CardGroupCocktail from '../Organism/CardGroupCocktail'
import './Main.scss'


const Main = () => {  

  // only one call to cocktail API
  const [dataCocktails, setDataCocktails] = useState([])

  useEffect(() => {
      getCocktails().then(setDataCocktails)
  }, [])
  
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <section className='wrapperMenu pt-4' >
        <CardGroupCocktail dataCocktails={dataCocktails} currentPage={currentPage} />
      </section>

      <div className='mt-4 pagination justify-content-center '>
        <PaginationSlider setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </>
  )
}

export default Main