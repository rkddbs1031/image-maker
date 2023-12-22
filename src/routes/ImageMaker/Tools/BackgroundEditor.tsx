import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { FaImage } from 'react-icons/fa6'

import { styleState } from 'states/tool'

import ColorPicker from 'components/ColorPicker'

import { cx } from 'styles'
import styles from './toolContainer.module.scss'

const BackgroundEditor = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeBGColor = (backgroundColor: string) =>
    setStyle((prev) => ({ ...prev, backgroundColor, backgroundImage: null }))

  const handleChangeBGImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files) return

    const backgroundImage = URL.createObjectURL(files[0])
    setStyle((prev) => ({ ...prev, backgroundImage }))
  }
  return (
    <div className={styles.background_editor_container}>
      <div className={cx([styles.bg_editor, styles.color_bg])}>
        <ColorPicker defaultValue={style.backgroundColor} onChangeColor={handleChangeBGColor} />
      </div>

      <div className={cx([styles.bg_editor, styles.image_bg])}>
        <label htmlFor='background_image'>
          <FaImage />
        </label>
        <input
          type='file'
          id='background_image'
          accept='image/png, image/jpeg, image/gif'
          onChange={handleChangeBGImage}
        />
      </div>
    </div>
  )
}
export default BackgroundEditor
