import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { ChromePicker, ColorResult } from 'react-color'

import { fontFamilyList, fontSizeList, fontWeightList } from 'utils/tool'
import { FontFamilyType } from 'types/tool'
import { styleState } from 'states/tool'

import DropDown from 'components/DropDown'

import styles from './toolContainer.module.scss'

const TextStyleForm = () => {
  const [style, setStyle] = useRecoilState(styleState)
  const [isOpenPicker, setIsOpenPicker] = useState(false)

  const handleChangeFontSize = (fontSize: number) => setStyle((prev) => ({ ...prev, fontSize }))

  const handleChangeFontWeight = (fontWeight: number) => setStyle((prev) => ({ ...prev, fontWeight }))

  const handleChangeFontFamily = (fontFamily: FontFamilyType) => setStyle((prev) => ({ ...prev, fontFamily }))

  const handleClickOpenPicker = () => setIsOpenPicker((prev) => !prev)

  const handleChangeColorPicker = (color: ColorResult) => setStyle((prev) => ({ ...prev, color: color.hex }))

  return (
    <div className={styles.font_container}>
      <div className={styles.font_size_container}>
        <DropDown
          defaultValue={style.fontSize}
          list={fontSizeList}
          height={280}
          onClickDropDownList={handleChangeFontSize}
        />
      </div>

      <div className={styles.font_weight_container}>
        <DropDown
          defaultValue={style.fontWeight}
          list={fontWeightList}
          height={224}
          onClickDropDownList={handleChangeFontWeight}
        />
      </div>

      <div className={styles.font_family_container}>
        <DropDown
          defaultValue={style.fontFamily}
          list={fontFamilyList}
          buttonMinWidth={155}
          height={56}
          onClickDropDownList={handleChangeFontFamily}
        />
      </div>

      <div className={styles.font_color_container}>
        <button type='button' onClick={handleClickOpenPicker} className={styles.selected_color}>
          <div style={{ backgroundColor: style.color }} />
        </button>

        {isOpenPicker && (
          <div className={styles.color_picker}>
            <ChromePicker color={style.color} onChange={handleChangeColorPicker} />
          </div>
        )}
      </div>
    </div>
  )
}

export default TextStyleForm
