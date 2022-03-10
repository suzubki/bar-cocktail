import React from 'react'
import { Button } from 'reactstrap'

import Cocktails from '../Molecules/Cocktails'
import './Menu.css'


const Menu = () => {
   
  return (
    <div>
        <div className='mt-4 ms-4'>Menú</div>
        <hr />

        <section className='wrapperMenu' >
            <Cocktails />
        </section>

        <section className='container d-grid grid-gap-1 my-4'>
            <Button color='success' > Cargar más </Button>
        </section>
    </div>
  )
}

export default Menu