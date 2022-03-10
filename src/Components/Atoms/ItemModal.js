import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PropTypes from 'prop-types';

const ItemModal = ({ modal, toggle, cocktailDescription }) => {
  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      centered={true}
    >
      <ModalHeader toggle={toggle}>
        {cocktailDescription[0].strDrink}
      </ModalHeader>
      <ModalBody>
        Instructions: {cocktailDescription[0].strInstructions}
        <br />
        Ingredients: { cocktailDescription[0].strIngredient1 }
      </ModalBody>
    </Modal>
  )
}

ItemModal.propTypes = {
  cocktailDescription : PropTypes.array
}

ItemModal.defaultProps = {
  cocktailDescription: [{
    strInstructions:'',
    strIngredient1: '',
    strDrink: ''
  }, null]
}

export default ItemModal