export interface Size {
  width: number
  height: number
}

export enum AlignType {
  CENTER = 'CENTER',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export interface AlignList {
  key: AlignType
  label: string
}
