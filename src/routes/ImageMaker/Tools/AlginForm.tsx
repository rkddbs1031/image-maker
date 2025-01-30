import { createElement } from 'react'
import { useRecoilState } from 'recoil'

import { AlignHorizontalType, AlignVerticalType } from 'types/tool'
import { alignHorizontalList, alignVerticalList } from 'utils/tool'
import { styleState } from 'states/tool'

import styles from './toolContainer.module.scss'

const AlignForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeAlignHorizontalType = () => {
    if (style.alignHorizontalType === AlignHorizontalType.Center) {
      setStyle((prev) => ({ ...prev, alignHorizontalType: AlignHorizontalType.Left }))
    } else if (style.alignHorizontalType === AlignHorizontalType.Left) {
      setStyle((prev) => ({ ...prev, alignHorizontalType: AlignHorizontalType.Right }))
    } else if (style.alignHorizontalType === AlignHorizontalType.Right) {
      setStyle((prev) => ({ ...prev, alignHorizontalType: AlignHorizontalType.Center }))
    }
  }

  const handleChangeAlignVerticalType = () => {
    if (style.alignVerticalType === AlignVerticalType.Center) {
      setStyle((prev) => ({ ...prev, alignVerticalType: AlignVerticalType.Bottom }))
    } else if (style.alignVerticalType === AlignVerticalType.Bottom) {
      setStyle((prev) => ({ ...prev, alignVerticalType: AlignVerticalType.Top }))
    } else if (style.alignVerticalType === AlignVerticalType.Top) {
      setStyle((prev) => ({ ...prev, alignVerticalType: AlignVerticalType.Center }))
    }
  }

  const selectedHorizontalIcon = alignHorizontalList.find((align) => align.key === style.alignHorizontalType)
  const selectedVerticalIcon = alignVerticalList.find((align) => align.key === style.alignVerticalType)

  return (
    <>
      <div className={styles.align_container}>
        {selectedHorizontalIcon && (
          <button type='button' onClick={handleChangeAlignHorizontalType}>
            {createElement(selectedHorizontalIcon.icon)}
          </button>
        )}
      </div>

      <div className={styles.align_container}>
        {selectedVerticalIcon && (
          <button type='button' onClick={handleChangeAlignVerticalType}>
            {createElement(selectedVerticalIcon.icon)}
          </button>
        )}
      </div>
    </>
  )
}

export default AlignForm
