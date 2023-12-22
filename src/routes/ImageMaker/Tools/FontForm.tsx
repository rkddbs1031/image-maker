import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'

import styles from './toolContainer.module.scss'
import DropDown from 'components/DropDown'
import { fontFamilyList, fontSizeList, fontWeightList } from 'utils/tool'
import { FontFamilyType } from 'types/tool'

const FontForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeFontSize = (fontSize: number) => setStyle((prev) => ({ ...prev, fontSize }))

  const handleChangeFontWeight = (fontWeight: number) => setStyle((prev) => ({ ...prev, fontWeight }))

  const handleChangeFontFamily = (fontFamily: FontFamilyType) => setStyle((prev) => ({ ...prev, fontFamily }))

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
    </div>
  )
}

export default FontForm
