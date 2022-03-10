import React, { useState } from 'react'
import { Card, CardBody, CardTitle, CardImg, Button} from 'reactstrap'
import getCocktailsById from '../../Helpers/getCocktailById'
import './CardItem.css'
import ItemModal from './ItemModal'

const CardItem = ({ id, name, image }) => {

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
          <CardImg
            alt={name}
            src={image}
            top
          />
          <CardTitle tag="h5">
            {name}
          </CardTitle>
          <Button color='primary' onClick={()=> {
            toggle()
            handleDetails()
          }} >
            Button
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

export default CardItem