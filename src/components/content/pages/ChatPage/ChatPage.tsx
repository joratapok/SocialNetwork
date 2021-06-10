import React, { useEffect, useRef, useState, UIEvent } from 'react'
import { Button, Avatar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { sendMessageThunk, startMessagesListeningThunk, stopMessagesListeningThunk } from '../../../../redux/chat-reducer'
import { AppStateType } from '../../../../redux/redux-store'
import { ChatMessageType } from '../../../../api/chatApi'

export const ChatPage: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListeningThunk())
        return () => {
            dispatch(stopMessagesListeningThunk())
        }
    }, [])

    return <div>
    CHAT
        <Messages />
        <AddFormMessages />
    </div>
}

export const Messages: React.FC = () => {
    const [autoScroll, setAutoScroll] = useState(true)
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchor = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (autoScroll) {
            messagesAnchor.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages])

    const onScrollHandler = (e: UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 150) {
            !autoScroll && setAutoScroll(true)
        } else {
            autoScroll && setAutoScroll(false)
        }
    }
    return <div style={{ height: '400px', overflowY: 'auto' }} onScroll={onScrollHandler}>
        {messages.map((m: ChatMessageType, index) => <Message message={m} key={m.id}/>)}
        <div ref={messagesAnchor}></div>
    </div>
}

export const Message: React.FC<{message: ChatMessageType}> = React.memo(({ message }) => {
    return <div style={{ borderBottom: '2px solid gray', marginTop: '5px' }}>
        <Avatar size="large" icon={<img src={message.photo} />} />
        <span><b>{message.userName}</b></span>
        <br/>
        <div>{message.message}</div>
        <hr/>

    </div>
})

Message.displayName = 'Message'

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
