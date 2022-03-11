import React from 'react'

const TextModal = ({ subtitle, value }) => {
  return (
    <>
      {
        value ?
          <>
            <strong>{subtitle}: </strong>{value}
          </> : null
      }
    </>
  )
}

export default TextModal