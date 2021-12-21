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
      width: "30px",
      listStyleType: "none",
      padding: "2px",
      margin: "5px",
      border: "1px solid #333",
      justifyContent: "center",
      textAlign: 'center',
      borderRadius: "100px"
    },
    link: {
      color: "#ddd",
      textDecoration: "none",
      heigh: "30px",
      width: "30px",
    }
  }

  return (
    <nav>
      <ul className='pagination' style={styles.pagination}>
        {pageNumbers.map(num => {
          return (
            <li key={num} style={styles.pages}>
              <a href='!#' style={styles.link}>
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