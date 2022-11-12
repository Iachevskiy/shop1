export interface IObserver {
  readonly name: string
  handle: (arg: any) => void // eslint-disable-line
  options: {
    root: TObserverOptionsRoot
    rootMargin: string
    threshold: number[] | number
  }
  observer: any
  items: IObserverItems[]
}

export interface IObserverRootWaiting {
  readonly name: string
  root: HTMLElement
}

export interface IObserverItems {
  readonly name: string
  el: HTMLElement
  added: boolean
}

export interface IResizeObserver {
  readonly name: string
  handle: (arg: any) => void // eslint-disable-line
  observer: any
  items: IObserverItems[]
}

export type TObserverOptionsRoot = HTMLElement | null
