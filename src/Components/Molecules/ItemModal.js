import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types';

import ItemDescriptionModal from './ItemDescriptionModal'
import './ItemModal.scss'

const ItemModal = ({ modal, toggle, cocktailDescription }) => {

  // destructuration of some cocktailDescription keys
  const {
    strDrink: name,
    strInstructions: instructions,
    strDrinkThumb: url,
    dateModified: recipeUpdate,
  } = cocktailDescription[0]

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      centered={true}
    >
      <ModalHeader toggle={toggle} className="modal__item" >
        {name}
      </ModalHeader>
      <ModalBody className="modal__item">
        {/* item description modal */}
        <ItemDescriptionModal  
          url={url} 
          name={name} 
          instructions={instructions} 
          recipeUpdate={recipeUpdate}
          cocktailDescription={cocktailDescription[0]}
        />
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