import { useRecoilState } from 'recoil'

import { fontFamilyList, fontSizeList, fontWeightList } from 'utils/tool'
import { FontFamilyType } from 'types/tool'
import { styleState } from 'states/tool'

import DropDown from 'components/DropDown'
import ColorPicker from 'components/ColorPicker'

import styles from './toolContainer.module.scss'

const TextStyleForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeFontSize = (fontSize: number) => setStyle((prev) => ({ ...prev, fontSize }))

  const handleChangeFontWeight = (fontWeight: number) => setStyle((prev) => ({ ...prev, fontWeight }))

  const handleChangeFontFamily = (fontFamily: FontFamilyType) => setStyle((prev) => ({ ...prev, fontFamily }))

  const handleChangeTextColor = (color: string) => setStyle((prev) => ({ ...prev, color }))

  return (
    <div className={styles.font_container}>
      <div className={styles.font_size_container}>
        <DropDown defaultValue={style.fontSize} list={fontSizeList} onClickDropDownList={handleChangeFontSize} />
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
          buttonMinWidth={175}
          onClickDropDownList={handleChangeFontFamily}
        />
      </div>

      <div className={styles.font_color_container}>
        <ColorPicker defaultValue={style.color} onChangeColor={handleChangeTextColor} />
      </div>
    </div>
  )
}

export default TextStyleForm
