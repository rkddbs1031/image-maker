import { useRecoilState } from 'recoil'

import { fontFamilyList, fontWeightList } from 'utils/tool'
import { FontFamilyType } from 'types/tool'
import { styleState } from 'states/tool'

import DropDown from 'components/DropDown'
import ColorPicker from 'components/ColorPicker'
import { FormInput } from 'components/Input'
import LabeledField from 'components/LabeledField'

import styles from './toolContainer.module.scss'

const TextStyleForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeFontSize = (fontSize: number) => setStyle((prev) => ({ ...prev, fontSize }))

  const handleChangeFontWeight = (fontWeight: number) => setStyle((prev) => ({ ...prev, fontWeight }))

  const handleChangeFontFamily = (fontFamily: FontFamilyType) => setStyle((prev) => ({ ...prev, fontFamily }))

  const handleChangeTextColor = (color: string) => setStyle((prev) => ({ ...prev, color }))

  return (
    <div className={styles.font_style_container}>
      <LabeledField label='Text Size'>
        <FormInput.Number
          value={style.fontSize}
          max={100}
          onChange={handleChangeFontSize}
          className={styles.font_size_input}
        />
      </LabeledField>
      <LabeledField label='Font Weight' contentClassName={styles.red}>
        <DropDown
          defaultValue={style.fontWeight}
          list={fontWeightList}
          height={125}
          onClickDropDownList={handleChangeFontWeight}
        />
      </LabeledField>
      <LabeledField label='Font Family'>
        <DropDown
          defaultValue={style.fontFamily}
          list={fontFamilyList}
          buttonMinWidth={175}
          height={130}
          onClickDropDownList={handleChangeFontFamily}
        />
      </LabeledField>
      <div className={styles.font_color_container}>
        <ColorPicker defaultValue={style.color} onChangeColor={handleChangeTextColor} />
      </div>
    </div>
  )
}

export default TextStyleForm
