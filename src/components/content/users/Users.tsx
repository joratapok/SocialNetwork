import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
import * as queryString from 'querystring'

type PropsType = {}
type QueryParamsType = {
  term? : string
  page? : string
  friend? : string
}

export const Users: React.FC<PropsType> = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const fetchingProcess = useSelector(getFetchingProcess)
    const isAuth = useSelector(getisAuth)

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        const parsed = queryString.parse((history.location.search).slice(1));
        let actualPage = currentPage
        const actualFilter = filter
        if (parsed.page) actualPage = Number(parsed.page)
        if (parsed.term) actualFilter.term = parsed.term as string
        if (parsed.friend) {
          actualFilter.friend = (parsed.friend === 'null') ? null :
          (parsed.friend === 'true') ? true : false
        }

        dispatch(getUsersThunk(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
      const query: QueryParamsType = {}
      if (filter.term) query.term = filter.term
      if (filter.friend !== null) query.friend = String(filter.friend)
      if (currentPage !== 1) query.page = String(currentPage)



      history.push({
        pathname: '/users',
        search: queryString.stringify(query)
      })
    }, [filter, currentPage])



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
