type MessageType = 'history' | 'hash' | 'reload' | 'mometa'

interface Message {
  mometa?: Mometa[]
  type?: 'push' | 'replace'
  action: MessageType
  url?: string
  data?: any
}

interface HashMessage extends Message {
  action: 'hash'
  url: string
}
interface HistoryMessage extends Message {
  action: 'history'
  type: 'push' | 'replace'
  url: string
  data: any
}
interface MometaMessage extends Message {
  action: 'mometa'
  mometa: Mometa[]
}

interface ReloadMessage extends Message {
  action: 'reload'
}

interface Loc {
  line: number
  column: number
  offset: number
}

interface Mometa {
  start: Loc
  end: Loc
  isSelfClosing: boolean
  filename: string
  isComponent: boolean
  slotName?: string
  name: string
}

export type { HashMessage, HistoryMessage, MometaMessage, Mometa, ReloadMessage, Message }
