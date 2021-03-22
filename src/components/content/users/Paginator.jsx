import React from 'react'
import classes from "./Users.module.css";



const Paginator = (props) => {

    let countPages = Math.ceil(props.totalUsersCount / props.pageSize)
    countPages = countPages >= 10 ? 10 : countPages
    let pages = []
    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map((p) => {
                return (
                    <span onClick={(e) => props.onPageChanged(p)}
                        className={(props.currentPage === p)
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
