import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginator from './paginator/Paginator'
import User from './User'
import UserSearchForm from './UsersForm'
import {
    getCurrentPage,
    getFetchingProcess,
    getFilter,
    getisAuth,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../../redux/users-selectors'
import { FilterType, followThunk, getUsersThunk, unFollowThunk } from '../../../redux/usersPage-reducer'

type PropsType = {}

export const Users: React.FC<PropsType> = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const fetchingProcess = useSelector(getFetchingProcess)
    const isAuth = useSelector(getisAuth)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunk(currentPage, pageSize, filter))
    }, [])

    const onPageChanged = (numPage: number) => {
        dispatch(getUsersThunk(numPage, pageSize, filter))
    }
    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunk(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const unFollow = (userId: number) => {
        dispatch(unFollowThunk(userId))
    }

    return (
        <div>

            <UserSearchForm onFilterChanged={onFilterChanged}/>

            <Paginator totalItems={totalUsersCount}
                pageSize={pageSize} currentPage={currentPage}
                onPageChanged={onPageChanged}/>
            {users.map((u) => {
                return <User user={u} key={u.id}
                    unFollowThunk={unFollow}
                    followThunk={follow}
                    fetchingProcess={fetchingProcess}
                    isAuth={isAuth}/>
            })}
        </div>
    )
}
