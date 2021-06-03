import React from 'react'
import { Field, InjectedFormProps, reduxForm, SubmissionError } from 'redux-form'
import classes from './Dialogs.module.css'
import People from './people/People'
import Dialog from './dialog/Dialog'
import { maxLengthCreator } from '../../../utils/validators/validator'
import { Textarea } from '../../common/formsControl/FormsControl'
import { DialogsInitialType } from '../../../redux/dialogs-reducer'

type PropsType = {
    messagesPage: DialogsInitialType
    sendMessage: (message: string) => void
}
type FormDataType = {
    message: string
}
type MessageAreaOwnProps = {
    onSubmit: (formData: FormDataType) => void
}

const Dialogs: React.FC<PropsType> = ({ messagesPage, sendMessage }) => {
    const onSubmit = (formData: FormDataType) => {
        if (formData.message) {
            sendMessage(formData.message)
        } else {
            throw new SubmissionError({
                message: 'whrite something  ༼ つ ◕_◕ ༽つ'
            })
        }
    }

    const maxLength500 = maxLengthCreator(500)

    const MessageAreaForm: React.FC<InjectedFormProps<FormDataType, MessageAreaOwnProps> & MessageAreaOwnProps> =
        ({ handleSubmit, error }) => {
            return (
                <form onSubmit={handleSubmit}>
                    <div className={classes.textAreaWrap}>
                        <Field name='message' placeholder='write new message'
                            validate={[maxLength500]}
                            component={Textarea}/>
                    </div>
                    <div className={classes.buttonWrap}>
                        <button className={classes.button}>Public</button>
                    </div>
                </form>
            )
        }

    const MessageAreaReduxForm = reduxForm<FormDataType, MessageAreaOwnProps>({ form: 'newMessage' })(MessageAreaForm)

    return (
        <div>
            <div className={classes.wrapper}>
                <People people={messagesPage.people}/>
                <Dialog dialogs={messagesPage.dialogs}/>
            </div>
            <div className={classes.newPostWrap}>
                <MessageAreaReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Dialogs
