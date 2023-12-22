import { atom } from 'recoil'
import { AlignType, FontFamilyType, StyleState } from 'types/tool'

export const styleState = atom<StyleState>({
  key: '#styleState',
  default: {
    width: 800,
    height: 400,
    alignType: AlignType.Center,
    fontSize: 20,
    fontWeight: 400,
    fontFamily: FontFamilyType.NanumGothicCoding,
    color: '#222222',
    backgroundColor: '#eee',
  },
})
