export interface Inp {
  type: string
  ind: string
  name: string
  placeholder: string
  htmlfor: string
}

export interface Hand {
  handler: (e: any) => void
}
