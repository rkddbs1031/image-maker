import { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil'

import { FaImage } from 'react-icons/fa6'
import { RxPadding } from 'react-icons/rx'

import { styleState } from 'states/tool'
import { INIT_PADDING } from 'utils/tool'

import ColorPicker from 'components/ColorPicker'
import { FormInput } from 'components/Input'

import { cx } from 'styles'
import styles from './toolContainer.module.scss'

const BackgroundEditor = () => {
  const [style, setStyle] = useRecoilState(styleState)
  const [hasPadding, setHasPadding] = useState(false)

  const handleChangeBGColor = (backgroundColor: string) =>
    setStyle((prev) => ({ ...prev, backgroundColor, backgroundImage: null }))

  const handleChangeBGImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    if (!files) return

    const backgroundImage = URL.createObjectURL(files[0])
    setStyle((prev) => ({ ...prev, backgroundImage }))
  }

  const handleCheckedPaddingValue = (e: ChangeEvent<HTMLInputElement>) => {
    setHasPadding(e.currentTarget.checked)
    setStyle((prev) => ({ ...prev, padding: e.currentTarget.checked ? INIT_PADDING : null }))
  }

  const handleChangePadding = (padding: number) => setStyle((prev) => ({ ...prev, padding }))

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

      <div className={styles.padding_container}>
        <div className={styles.background_padding}>
          <label htmlFor='padding' className={cx([hasPadding && styles.isChecked])}>
            <RxPadding />
          </label>
          <input type='checkbox' id='padding' checked={hasPadding} onChange={handleCheckedPaddingValue} />
          <p className={styles.padding_info}>이미지 내부 여백을 설정할 수 있습니다.</p>
        </div>

        {hasPadding && style.padding && (
          <div className={styles.opacity_container}>
            <FormInput.Range value={style.padding} min={1} max={70} step={1} onChange={handleChangePadding} />
          </div>
        )}
      </div>
    </div>
  )
}
export default BackgroundEditor
