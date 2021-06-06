
export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
export type SubscriberType = (messages: ChatMessageType[]) => void

let subscribers = [] as Array<SubscriberType>

let ws: WebSocket | null = null
function closeHandler () {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setTimeout(createChannel, 5000)
}
function messageHandler (e: MessageEvent) {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach((s) => s(newMessages))
}
function cleanUp () {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
}
function createChannel () {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

export const chatApi = {
    start () {
        createChannel()
    },
    stop () {
        subscribers = []
        cleanUp()
        ws?.close()
    },
    subscribe (callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(s => s !== callback)
        }
    },
    unsubscribe (callback: SubscriberType) {
        subscribers = subscribers.filter(s => s !== callback)
    },
    sendMessage (message: string) {
        ws?.send(message)
    }
}
