import { createElement } from 'react'
import { useRecoilState } from 'recoil'

import { AlignType } from 'types/tool'
import { alignList } from 'utils/tool'
import { styleState } from 'states/tool'

import styles from './toolContainer.module.scss'

const AlignForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeAlignType = () => {
    if (style.alignType === AlignType.Center) {
      setStyle((prev) => ({ ...prev, alignType: AlignType.Left }))
    } else if (style.alignType === AlignType.Left) {
      setStyle((prev) => ({ ...prev, alignType: AlignType.Right }))
    } else if (style.alignType === AlignType.Right) {
      setStyle((prev) => ({ ...prev, alignType: AlignType.Center }))
    }
  }

  const selectedIcon = alignList.find((align) => align.key === style.alignType)

  return (
    <div className={styles.align_container}>
      {selectedIcon && (
        <button type='button' onClick={handleChangeAlignType}>
          {createElement(selectedIcon.icon)}
        </button>
      )}
    </div>
  )
}

export default AlignForm
