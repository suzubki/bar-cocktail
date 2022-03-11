import React, { useState } from 'react'
import { Card, CardBody, CardImg, CardTitle, Button} from 'reactstrap'

import './CardItemCocktail.scss'

import getCocktailsById from '../../Helpers/getCocktailById'
import ItemModal from './ItemModal'

const CardItemCocktail = ({ id, name, image }) => {

  // Activar el modal
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  // Manejador de eventos
  const [cocktailById, setCocktailById] = useState()

  function handleDetails(){
    getCocktailsById(id).then(resp => {
      setCocktailById(resp)
    })
  }

  return (
    <>
      <Card id={id} className='card__item' >
        <CardBody>
          <CardImg src={image} alt={name} />
          <CardTitle tag="h5" className='text-white mt-2'>{name}</CardTitle>
          <Button color='primary' onClick={()=> {
            toggle()
            handleDetails()
          }} >
            Details
          </Button>
        </CardBody>
      </Card>

      {/* Modal Reacstrap -- Disable strictMode */}
      <ItemModal 
        modal={modal} 
        toggle={toggle} 
        cocktailDescription={cocktailById} 
      />
    </>
  )
}

export default CardItemCocktail