import { atom } from 'recoil'
import { AlignType, FontFamilyType, StyleState } from 'types/tool'

export const styleState = atom<StyleState>({
  key: '#styleState',
  default: {
    width: 500,
    height: 300,
    alignType: AlignType.Center,
    fontSize: 50,
    fontWeight: 600,
    fontFamily: FontFamilyType.DMSerifDisplay,
    color: '#d2d2d2',
    backgroundColor: '#eee',
    backgroundImage: null,
    title: 'Image Maker',
    subTitle: 'subtitle',
    blur: null,
  },
})
