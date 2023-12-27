import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'

import { FaImage } from 'react-icons/fa6'
import { BsLayersHalf } from 'react-icons/bs'

import { styleState } from 'states/tool'
import { INIT_BLUR } from 'utils/tool'

import ColorPicker from 'components/ColorPicker'

import { cx } from 'styles'
import styles from './toolContainer.module.scss'

const BackgroundEditor = () => {
  const [style, setStyle] = useRecoilState(styleState)
  const [hasDimLayer, setHasDimLayer] = useState(false)

  const handleChangeBGColor = (backgroundColor: string) =>
    setStyle((prev) => ({ ...prev, backgroundColor, backgroundImage: null }))

  const handleChangeBGImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files) return

    const backgroundImage = URL.createObjectURL(files[0])
    setStyle((prev) => ({ ...prev, backgroundImage }))
  }

  const handleCheckedDimLayerValue = (e: ChangeEvent<HTMLInputElement>) => {
    setHasDimLayer(e.currentTarget.checked)
    setStyle((prev) => ({ ...prev, blur: e.currentTarget.checked ? INIT_BLUR : null }))
  }

  const handleChangeOpacity = (e: ChangeEvent<HTMLInputElement>) =>
    setStyle((prev) => ({ ...prev, blur: Number(e.currentTarget.value) }))

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

      <div className={styles.dim_layer_container}>
        <div className={styles.background_dim_layer}>
          <label htmlFor='background_dim_layer' className={cx([hasDimLayer && styles.isChecked])}>
            <BsLayersHalf />
          </label>
          <input
            type='checkbox'
            id='background_dim_layer'
            checked={hasDimLayer}
            onChange={handleCheckedDimLayerValue}
          />
        </div>

        {style.blur && (
          <div className={styles.opacity_container}>
            <input type='range' value={style.blur} min='1' max='10' step={1} onChange={handleChangeOpacity} />
          </div>
        )}
      </div>
    </div>
  )
}
export default BackgroundEditor
