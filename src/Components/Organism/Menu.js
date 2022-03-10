import { Button } from 'reactstrap'
import React,{useState, useEffect} from 'react'

import getCocktails from '../../Helpers/getCocktails'
import Cocktails from '../Molecules/Cocktails'
import './Menu.css'


const Menu = () => {

    const [dataCocktails, setDataCocktails] = useState([])

    useEffect(() => {
        getCocktails().then(setDataCocktails)
    }, [])

    let listCocktails =  dataCocktails.splice(0, 10)
   
  return (
    <div>
        <div className='mt-4 ms-4'>Menú</div>
        <hr />

        <section className='wrapperMenu' >
            <Cocktails listCocktails={listCocktails} />
        </section>

        <section className='container d-grid grid-gap-1 my-4'>
            <Button color='success' > Cargar más </Button>
        </section>
    </div>
  )
}

export default Menu