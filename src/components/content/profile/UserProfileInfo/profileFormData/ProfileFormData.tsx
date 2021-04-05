import React from 'react'
import classes from "./ProfileFormData.module.css"
import Button from "./button/Button";
import {Checkbox, HiddenInput, Input, Textarea} from "../../../../common/formsControl/FormsControl";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import CancelButton from "./cancelButton/CancelButton";
import {userType} from "../../../../../types/types";

type ProfileFormDataType = {
    initialValues: userType
    setEditModeOff: () => void
    onSubmit: (formData: userType) => void
}

let ProfileFormData: React.FC<InjectedFormProps<userType, ProfileFormDataType> & ProfileFormDataType> =
    ({initialValues, handleSubmit, error, setEditModeOff}) => {
    return (
        <form className={classes.form} onSubmit={ handleSubmit }>

            <Field name={'fullName'}
                   component={HiddenInput}/>
            <div className={classes.items}>
                <Field placeholder={'About me'}
                       name={'aboutMe'} validate={[]}
                       component={Textarea}/>
            </div>
            <div className={classes.items}>
                <Field placeholder={'Professional skills'}
                       name={'lookingForAJobDescription'} validate={[]}
                       component={Textarea}/>
            </div>
            <div className={classes.items}>
                <div className={classes.lookJobWrapper}>
                    <div className={classes.lookingJob}>
                        <span>Looking job:</span>
                    </div>
                    <Field type={'checkbox'}
                       name={'lookingForAJob'} validate={[]}
                       component={Checkbox}
                       className={classes.checkbox}/>
                </div>
            </div>
            <div className={classes.contactsWrapper}>
                <span className={classes.contactHeader}>Contacts: </span>{Object.keys(initialValues.contacts).map((key) => {
                return(
                    <div className={classes.contacts} key={key} >
                        <div className={classes.contact}>{key + ":"}</div>
                        <Field placeholder={key} name={'contacts.' + key} component={Input}/>
                    </div>
                )
            })}
            </div>

            {(error &&
                <div className={classes.errorWrapper}>
                    <div className={classes.errorField}>
                        {error}
                    </div>
                </div>)}
            <div className={classes.buttonWrapper}>
                <CancelButton setEditModeOff={setEditModeOff} />
                <Button/>
            </div>

        </form>
    )
}

export const ProfileReduxForm = reduxForm<userType, ProfileFormDataType>({form: 'editProfile'})(ProfileFormData)

export default ProfileFormData