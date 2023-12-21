import { useState } from 'react'

import { AlignType } from 'types/tool'
import { alignList } from 'utils/tool'

import { cx } from 'styles'
import styles from './toolContainer.module.scss'

const AlignForm = () => {
  const [alignType, setAlignType] = useState<AlignType>(AlignType.CENTER)
  const [isDropped, setIsDropped] = useState(false)

  const align = alignList.find(({ key }) => key === alignType)?.label

  const handleDropDown = () => setIsDropped((prev) => !prev)

  const handleClickAlign = (key: AlignType) => {
    setAlignType(key)
    setIsDropped((prev) => !prev)
  }

  return (
    <div className={styles.align_container}>
      <button type='button' className={styles.selected_algin} onClick={handleDropDown}>
        {align}
      </button>

      <div className={cx(styles.dropdown_list_container, { [styles.isActive]: isDropped })}>
        <ul>
          {alignList.map(({ key, label }) => (
            <li key={key}>
              <button type='button' onClick={() => handleClickAlign(key)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AlignForm
