import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'

import styles from './imageViewer.module.scss'

const ImageViewer = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const layoutStyle = {
    width: style.width,
    height: style.height,
    ...(style.backgroundColor && { backgroundColor: style.backgroundColor }),
    ...(style.backgroundImage && { backgroundImage: `url(${style.backgroundImage})` }),
  }

  const inputStyle = {
    textAlign: style.alignType,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    fontFamily: style.fontFamily,
    color: style.color,
  }

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setStyle((prev) => ({ ...prev, title: e.currentTarget.value }))

  return (
    <div className={styles.image_viewer_container}>
      <div className={styles.canvas} style={layoutStyle}>
        <input
          type='text'
          value={style.title}
          className={styles.title}
          style={inputStyle}
          onChange={handleChangeTitle}
        />
      </div>
    </div>
  )
}
export default ImageViewer
