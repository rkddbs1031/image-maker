import { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color'

import styles from './colorPicker.module.scss'

interface ColorPickerProps {
  defaultValue: string
  onChangeColor: (color: string) => void
}

const ColorPicker = ({ defaultValue, onChangeColor }: ColorPickerProps) => {
  const [currentColor, setCurrentColor] = useState(defaultValue)
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false)

  const handleClickOpenPicker = () => setIsOpenColorPicker((prev) => !prev)

  const handleChangeColorPicker = (color: ColorResult) => {
    setCurrentColor(color.hex)
    onChangeColor(color.hex)
  }

  return (
    <>
      <button type='button' onClick={handleClickOpenPicker} className={styles.selected_color}>
        <div style={{ backgroundColor: currentColor }} />
      </button>

      {isOpenColorPicker && (
        <div className={styles.color_picker}>
          <ChromePicker color={currentColor} onChange={handleChangeColorPicker} />
        </div>
      )}
    </>
  )
}
export default ColorPicker
