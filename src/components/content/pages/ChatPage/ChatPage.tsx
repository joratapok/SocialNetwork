import React, { useEffect, useState } from 'react'
import { Button, Avatar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessageThunk, startMessagesListeningThunk, stopMessagesListeningThunk } from '../../../../redux/chat-reducer'
import { AppStateType } from '../../../../redux/redux-store'

type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

export const ChatPage: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListeningThunk())
        return () => {
            dispatch(stopMessagesListeningThunk())
        }
    }, [])

    return <div style={{ height: '400px', overflowY: 'auto' }}>
    CHAT
        <Messages />
        <AddFormMessages />
    </div>
}

export const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    return <div >
        {messages.map((m: ChatMessageType, index) => <Message message={m} key={index}/>)}
    </div>
}

export const Message: React.FC<{message: ChatMessageType}> = ({ message }) => {
    return <div style={{ borderBottom: '2px solid gray', marginTop: '5px' }}>
        <Avatar size="large" icon={<img src={message.photo} />} />
        <span><b>{message.userName}</b></span>
        <br/>
        <div>{message.message}</div>
        <hr/>

    </div>
}

export const AddFormMessages: React.FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const wsStatus = useSelector((state: AppStateType) => state.chat.status)
    const sendMessage = () => {
        if (!message) {
            return
        }
        dispatch(sendMessageThunk(message))
        setMessage('')
    }
    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}>
            </textarea>
        </div>
        <div>
            <Button disabled={wsStatus !== 'ready'} type="primary" onClick={sendMessage}>Send</Button>
        </div>
    </div>
}
