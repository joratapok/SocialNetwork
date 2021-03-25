import React from 'react'
import classes from "./Users.module.css";


const Paginator = ({totalItems, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let countPages = Math.ceil(totalItems / pageSize)

    let pages = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(countPages / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div>
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <div>
                            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>
                                Switch Left</button>}
                            <span onClick={(e) => onPageChanged(p)}
                                  className={(currentPage === p)
                                      ? [classes.pagination, classes.paginationActive].join(' ')
                                      : classes.pagination}>
                                {p}
                            </span>
                            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>
                                Switch Right</button>}
                        </div>
                    )
                })}
        </div>
    )
}

export default Paginator
