
export type ChatMessageAPIType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type ChatMessageType = ChatMessageAPIType & { id: string }
export type StatusType = 'pending' | 'ready' | 'error'
export type MessagesReceivedSubscriberType = (messages: ChatMessageAPIType[]) => void
export type StatusChangedSubscriberType = (status: StatusType) => void

const subscribers = {
    'messages-received': [] as Array<MessagesReceivedSubscriberType>,
    'status-changed': [] as Array<StatusChangedSubscriberType>
}
type EventsNames = 'messages-received' | 'status-changed'

let ws: WebSocket | null = null

function notifySubscribersAboutStatus (status: StatusType) {
    subscribers['status-changed'].forEach(s => s(status))
}
function closeHandler () {
    notifySubscribersAboutStatus('pending')
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setTimeout(createChannel, 5000)
}
function messageHandler (e: MessageEvent) {
    const newMessages = JSON.parse(e.data)
    subscribers['messages-received'].forEach((s) => s(newMessages))
}
function openHandler () {
    notifySubscribersAboutStatus('ready')
}
function errorHandler () {
    notifySubscribersAboutStatus('error')
    console.error('Some error was occured, try to refresh page')
}
function cleanUp () {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}
function createChannel () {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatApi = {
    start () {
        createChannel()
    },
    stop () {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe (eventName: EventsNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe (eventName: EventsNames, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage (message: string) {
        ws?.send(message)
    }
}
