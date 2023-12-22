export interface StyleState {
  width: number
  height: number
  alignType: AlignType
  fontSize: number
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

export interface FontSizeList {
  key: number
  label: string
}
