import React from 'react'
import {Field, Form, Formik} from "formik";
import {FilterType} from "../../../redux/usersPage-reducer";

type PropsType = {
    onFilterChanged: (FilterType: FilterType) => void
}

const UserSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {

    const userSearchFormValidate = (values: any) => {
        const errors = {}
        return errors
    }

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        let filter: FilterType = {
            term: values.term,
            friend: values.friend
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={{term: '', friend: null}}
                validate={userSearchFormValidate}
                onSubmit={submit}
            >
                {({
                      isSubmitting,
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