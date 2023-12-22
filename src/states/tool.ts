import { atom } from 'recoil'
import { AlignType, FontFamilyType, StyleState } from 'types/tool'

export const styleState = atom<StyleState>({
  key: '#styleState',
  default: {
    width: 300,
    height: 500,
    alignType: AlignType.Center,
    fontSize: 20,
    fontWeight: 400,
    fontFamily: FontFamilyType.NanumGothicCoding,
  },
})
