import React, { useState } from 'react'
import classes from './Paginator.module.css'

type PropsType = {
    totalItems: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({
    totalItems,
    pageSize,
    currentPage,
    onPageChanged,
    portionSize = 10
}) => {
    const countPages = Math.ceil(totalItems / pageSize)

    const pages: Array<number> = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(countPages / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={classes.paginatorWrapper}>
            {portionNumber > 1 && <button className={classes.paginatorArrow}
                onClick={() => setPortionNumber(portionNumber - 1)}>
                {'< '}</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <div key={p} onClick={() => onPageChanged(p)}
                        className={currentPage === p
                            ? [classes.pagination, classes.paginationActive].join(' ')
                            : classes.pagination}>
                        {p}
                    </div>
                })}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}
                className={classes.paginatorArrow}>
                {' >'}</button>}
        </div>
    )
}

export default Paginator
