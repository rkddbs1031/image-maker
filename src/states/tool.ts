import { atom } from 'recoil'
import { AlignType, StyleState } from 'types/tool'

export const styleState = atom<StyleState>({
  key: '#styleState',
  default: {
    width: 300,
    height: 500,
    alignType: AlignType.CENTER,
  },
})
