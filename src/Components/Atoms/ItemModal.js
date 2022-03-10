import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types';

const ItemModal = ({ modal, toggle, cocktailDescription }) => {

  // destructuration of some cocktailDescription keys
  const {
    strDrink: name,
    strInstructions: instructions,
    strDrinkThumb: url,
    dateModified: recipeUpdate,
  } = cocktailDescription[0]


  // function to get similar Keys using 'startsWith' method 
  function listOfDetails(firstLetters) {
    const moreDetails = []
    Object.entries(cocktailDescription[0]).forEach(([key, value]) => {
      if (key.startsWith(firstLetters)) {
        moreDetails.push(value)
      }
    })

    return moreDetails.filter(el=> el !== null && el !== '')
  }

  //join ingredients and measure, output expect: Ingredient --> Measure
  function howToPrepare() {
    const ingred = listOfDetails("strIngred")
    const measur = listOfDetails("strMeasu")

    const newarr = []
    for (let i = 0; i < ingred.length; i++) {
      newarr.push(`${ ingred[i] } --> ${ measur[i] }`) 
    }

    return newarr
  }

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      centered={true}
    >
      <ModalHeader toggle={toggle}>
        {name}
      </ModalHeader>
      <ModalBody>
        <center>
          <img src={url} alt={name} style={{ width: "80%" }}></img>
        </center>
        <br />
        {
          instructions?
          <> 
            <strong>Instructions: </strong>{instructions}
          </> : null
        }
        <br />
        <strong>Ingredients and measure: </strong>
        {
          howToPrepare().join(' || ')
        }
        <br />
        {
          recipeUpdate ? 
          <>
            <strong>Latest update recipe: </strong>{recipeUpdate} 
          </> : null
        }
      </ModalBody>
    </Modal>
  )
}

ItemModal.propTypes = {
  cocktailDescription: PropTypes.array
}

ItemModal.defaultProps = {
  cocktailDescription: [{
    strInstructions: '',
    strIngredient1: '',
    strDrink: ''
  }, null]
}

export default ItemModal