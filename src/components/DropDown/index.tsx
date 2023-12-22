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
  height: number
  onClickDropDownList: (selectedValue: T) => void
}

const DropDown = <T,>({ defaultValue, list, height, onClickDropDownList }: DropDownProps<T>) => {
  const [isDropped, setIsDropped] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const dropDownLabel = list.find(({ key }) => key === selectedValue)?.label

  const handleDropDown = () => setIsDropped((prev) => !prev)

  const handleClickDropDownList = (value: T) => {
    setSelectedValue(value)
    onClickDropDownList(value)
    setIsDropped((prev) => !prev)
  }

  return (
    <>
      <button type='button' className={styles.selected_algin} onClick={handleDropDown}>
        {`${dropDownLabel}`}
      </button>

      <div
        className={cx(styles.dropdown_list_container, { [styles.isActive]: isDropped })}
        style={{
          height: isDropped ? height : 0,
        }}
      >
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
    </>
  )
}

export default DropDown
