import React, { useEffect } from 'react'
import { Button } from 'antd'

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const ChatPage: React.FC = () => {
    return <div style={{ height: '400px', overflowY: 'auto' }}>
    CHAT
        <Messages />
        <AddFormMessages />
    </div>
}

export const Messages: React.FC = () => {
    const messages = [1, 2, 3, 4, 5, 6, 7, 8]
    return <div >
        {messages.map((el: any) => <Message key={el}/>)}
        <Message/>
    </div>
}

export const Message: React.FC = () => {
    const message = {
        avatar: 'https://i.pravatar.cc/30',
        name: 'Andrey',
        message: 'hello pios'
    }
    return <div style={{ borderBottom: '2px solid gray', marginTop: '5px' }}>
        <img src={message.avatar} />
        <span><b>{message.name}</b></span>
        <br/>
        <div>{message.message}</div>
        <hr/>

    </div>
}

export const AddFormMessages: React.FC = () => {
    return <div>
        <div>
            <textarea>
            </textarea>
        </div>
        <div>
            <Button type="primary">Send</Button>
        </div>
    </div>
}
