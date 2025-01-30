import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

export interface StyleState {
  width: number
  height: number
  alignHorizontalType: AlignHorizontalType
  alignVerticalType: AlignVerticalType
  fontSize: number
  fontWeight: number
  fontFamily: FontFamilyType
  color: string
  backgroundColor: string
  backgroundImage: null | string
  title: string
  subTitle: string
  padding: number | null
}

export enum AlignHorizontalType {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

export enum AlignVerticalType {
  Center = 'center',
  Top = 'flex-start',
  Bottom = 'flex-end',
}

export interface AlignList {
  key: AlignHorizontalType | AlignVerticalType
  icon: ComponentType<IconBaseProps>
}

export interface FontListType {
  key: number
  label: string
}

export enum FontFamilyType {
  NanumGothic = 'Nanum Gothic',
  NotoSans = 'Noto Sans KR',
  NotoSerif = 'Noto Serif KR',
  Roboto = 'Roboto',
  SogangUniversity = 'SOGANGUNIVERSITYTTF',
  Diphylleia = "'Diphylleia', serif",
  RubikDoodleShadow = "'Rubik_Doodle_Shadow variant0', Tofu",
  RubikMaps = 'Rubik_Maps variant0',
  Anton = 'Anton',
  GasoekOne = 'Gasoek One',
  DMSerifDisplay = 'DM Serif Display',
  ShadowInto = 'Shadows_Into_Light variant0',
  BlackHanSans = 'Black Han Sans',
  NanumPenScript = 'Nanum Pen Script',
  NanumMyeongjo = 'Nanum Myeongjo',
}

export interface FontFamilyList {
  key: FontFamilyType
  label: string
}
