import React from 'react'
import Paginator from "./paginator/Paginator"
import User from "./User"
import {usersType,} from "../../../types/types";
import UserSearchForm from "./UsersForm";
import {FilterType} from "../../../redux/usersPage-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onFilterChanged: (FilterType: FilterType) => void
    onPageChanged: (numPage: number) => void
    users: Array<usersType>
    unFollowThunk: (userId: number) => void
    followThunk: (userId: number) => void
    fetchingProcess: Array<number>
    isAuth: boolean

}

const Users: React.FC<PropsType> = ({
                                        totalUsersCount,
                                        pageSize,
                                        currentPage,
                                        onPageChanged,
                                        onFilterChanged,
                                        users,
                                        unFollowThunk,
                                        followThunk,
                                        fetchingProcess,
                                        isAuth,
                                    }) => {
    return (
        <div>

            <UserSearchForm onFilterChanged={onFilterChanged}/>

            <Paginator totalItems={totalUsersCount}
                       pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            {users.map((u) => {
                return <User user={u} key={u.id}
                             unFollowThunk={unFollowThunk}
                             followThunk={followThunk}
                             fetchingProcess={fetchingProcess}
                             isAuth={isAuth}/>
            })}
        </div>
    )
}

export default Users