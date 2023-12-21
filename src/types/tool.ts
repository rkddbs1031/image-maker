export interface StyleState {
  width: number
  height: number
  alignType: AlignType
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
