import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'

import ColorPicker from 'components/ColorPicker'

import { cx } from 'styles'
import styles from './toolContainer.module.scss'

const BackgroundEditor = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeBGColor = (backgroundColor: string) => setStyle((prev) => ({ ...prev, backgroundColor }))

  return (
    <div className={styles.background_editor_container}>
      <div className={cx([styles.bg_editor, styles.color_bg])}>
        <ColorPicker defaultValue={style.backgroundColor} onChangeColor={handleChangeBGColor} />
      </div>

      <div className={cx([styles.bg_editor, styles.image_bg])}>image bg</div>
    </div>
  )
}
export default BackgroundEditor
