import React from 'react'
import { Field, Form, Formik } from 'formik'
import { FilterType } from '../../../redux/usersPage-reducer'
import { getFilter } from '../../../redux/users-selectors'
import { useDispatch, useSelector } from 'react-redux'

type PropsType = {
    onFilterChanged: (FilterType: FilterType) => void
}

const UserSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
    const userSearchFormValidate = (values: any) => {
        const errors = {}
        return errors
    }

    const filter = useSelector(getFilter)

    const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{term: filter.term, friend: String(filter.friend) as any}}
                validate={userSearchFormValidate}
                onSubmit={submit}
            >
                {({
                    isSubmitting
                }) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <Field name='friend' as='select'>
                            <option value='null'>All</option>
                            <option value='true'>Only followed</option>
                            <option value='false'>Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})

export default UserSearchForm
