export interface StyleState {
  width: number
  height: number
  alignType: AlignType
  fontSize: number
  fontWeight: number
  fontFamily: FontFamilyType
}

export enum AlignType {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

export interface AlignList {
  key: AlignType
  label: string
}

export interface FontListType {
  key: number
  label: string
}

export enum FontFamilyType {
  NanumGothicCoding = 'Nanum Gothic Coding',
  Arial = 'Arial',
}

export interface FontFamilyList {
  key: FontFamilyType
  label: string
}
