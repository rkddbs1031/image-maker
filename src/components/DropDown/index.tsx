import { useState } from 'react'

import { cx } from 'styles'
import styles from './dropDown.module.scss'

export type DropDownList<T> = {
  key: T
  label: string
}

interface DropDownProps<T> {
  defaultValue: T
  list: DropDownList<T>[]
  buttonMinWidth?: number
  height?: number
  onClickDropDownList: (selectedValue: T) => void
}

const DropDown = <T,>({ defaultValue, list, buttonMinWidth, height, onClickDropDownList }: DropDownProps<T>) => {
  const [isDropped, setIsDropped] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const dropDownLabel = list.find(({ key }) => key === selectedValue)?.label

  const handleDropDown = () => setIsDropped((prev) => !prev)

  const handleClickDropDownList = (value: T) => {
    setSelectedValue(value)
    onClickDropDownList(value)
    setIsDropped((prev) => !prev)
  }

  const handleCloseDropDown = () => {
    if (!isDropped) return

    setIsDropped((prev) => !prev)
  }

  const dropStyle = {
    ...(!isDropped && { height: 0 }),
    ...(isDropped && height && { height: `${height}px` }),
    ...(isDropped && !height && { height: height ? `${height}px` : '215px' }),
    ...(isDropped && !height && { maxHeight: height ? `${height}px` : '215px' }),
  }

  return (
    <>
      <button
        type='button'
        className={styles.selected_algin}
        onClick={handleDropDown}
        style={{ minWidth: buttonMinWidth || 'auto' }}
      >
        {`${dropDownLabel}`}
      </button>

      <div className={cx(styles.dropdown_list_container, { [styles.isActive]: isDropped })} style={dropStyle}>
        <ul>
          {list.map(({ key, label }) => (
            <li key={label}>
              <button type='button' onClick={() => handleClickDropDownList(key)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isDropped && (
        <button type='button' className={styles.drop_down_layer} onClick={handleCloseDropDown}>
          layer
        </button>
      )}
    </>
  )
}

export default DropDown
