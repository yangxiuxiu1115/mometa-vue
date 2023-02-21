type MessageType = 'history' | 'hash' | 'reload' | 'mometa' | 'selected'

interface Message {
  mometa?: MometaPath[]
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
  mometa: MometaPath[]
}

interface ReloadMessage extends Message {
  action: 'reload'
}

interface SelectedMessage extends Message {
  action: 'selected'
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

interface MometaPath {
  name: string
  rect: DOMRect
  mometa: Mometa[]
}

export type { HashMessage, HistoryMessage, MometaMessage, Mometa, ReloadMessage, Message, MometaPath, SelectedMessage }
