import React from 'react'

export const Pagination = ({ postsPerPage, totalPage, paginate, currentPage }) => {
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
      borderRadius: "100px",
    },
    link: {
      color: "#ddd",
      textDecoration: "none",
      heigh: "30px",
      width: "30px",
    },
    selected: {
      backgroundColor: "grey",
    }
  }

  return (
    <nav>
      <ul className='pagination' style={styles.pagination}>
        {pageNumbers.map(num => {
          let picked = currentPage === num ? { ...styles.link, ...styles.selected } : styles.link;
          let pagesPicked = currentPage === num ? { ...styles.pages, ...styles.selected } : styles.pages;
          return (
            <li key={num} style={pagesPicked}>
              <a onClick={() => paginate(num)} href='!#' style={picked}>
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