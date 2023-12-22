import { AlignList, AlignType, FontSizeList } from 'types/tool'

export const alignList: AlignList[] = [
  { key: AlignType.CENTER, label: '중앙정렬' },
  { key: AlignType.LEFT, label: '좌측정렬' },
  { key: AlignType.RIGHT, label: '우측정렬' },
]

export const fontSizeList: FontSizeList[] = [
  { key: 10, label: '10px' },
  { key: 20, label: '20px' },
  { key: 30, label: '30px' },
  { key: 40, label: '40px' },
  { key: 50, label: '50px' },
  { key: 60, label: '60px' },
  { key: 70, label: '70px' },
  { key: 80, label: '80px' },
  { key: 90, label: '90px' },
  { key: 100, label: '100px' },
]
