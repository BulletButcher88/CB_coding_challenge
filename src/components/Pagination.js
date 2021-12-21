import React from 'react'

export const Pagination = ({ postsPerPage, totalPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPage / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const styles = {
    pagination: {
      display: "flex",
      flexDirection: "row",
    },
    pages: {
      heigh: "10px",
      width: "30px",
      color: "white",
      listStyleType: "none",
      margin: "10px",
      border: "1px solid white",
      textAlign: 'center',
    }
  }

  return (
    <nav>
      <ul className='pagination' style={styles.pagination}>
        {pageNumbers.map(num => {
          return (
            <li key={num} style={styles.pages}>
              <a href='!#' style={{ textDecoration: "none" }}>
                {num}
              </a>
            </li>
          )
        })
        }
      </ul>
    </nav>
  )
}

export default Pagination;