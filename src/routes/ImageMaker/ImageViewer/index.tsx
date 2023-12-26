import { useRecoilValue } from 'recoil'

import { styleState } from 'states/tool'

import styles from './imageViewer.module.scss'

const ImageViewer = () => {
  const style = useRecoilValue(styleState)

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

  return (
    <div className={styles.image_viewer_container}>
      <div className={styles.canvas} style={layoutStyle} id='canvas'>
        <p style={inputStyle} className={styles.title}>
          {style.title}
        </p>
      </div>
    </div>
  )
}
export default ImageViewer
