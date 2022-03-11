import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationSlider = ({currentPage, setCurrentPage}) => {

  const pagesCount = 10
  function handlePageClick(e, i) {
    setCurrentPage(i)
  }

  return (
    <>
      <Pagination aria-label="Page navigation example"  >

        {[...Array(pagesCount)].map((page, i) => (
          <PaginationItem active={i === currentPage} key={i}>
            <PaginationLink onClick={e => handlePageClick(e, i)} >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

      </Pagination>
    </>
  )
}

export default PaginationSlider