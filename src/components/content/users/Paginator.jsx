import React from 'react'
import classes from "./Users.module.css";



const Paginator = ({totalItems, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let countPages = Math.ceil(totalItems / pageSize)

    let pages = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPages / portionSize)

    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1


    return (
        <div>
            {pages
              .filter(p => p>= leftPortionPageNumber && p<= rightPortionPageNumber)
              .map((p) => {
                return (
                    <span onClick={(e) => onPageChanged(p)}
                        className={(currentPage === p)
                                  ? [classes.pagination, classes.paginationActive].join(' ')
                                  : classes.pagination}>
                                {p}
                    </span>
                    )
                })}
        </div>
    )
}

export default Paginator
