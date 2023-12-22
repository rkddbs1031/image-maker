import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'

import styles from './imageViewer.module.scss'

const ImageViewer = () => {
  const [style, setStyle] = useRecoilState(styleState)

  return (
    <div className={styles.image_viewer_container}>
      <div
        className={styles.canvas}
        style={{
          width: style.width,
          height: style.height,
          backgroundSize: 'cover',
          background: style.backgroundImage ? `url(${style.backgroundImage}) no-repeat center` : style.backgroundColor,
        }}
      >
        <input
          type='text'
          className={styles.title}
          style={{
            textAlign: style.alignType,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            fontFamily: style.fontFamily,
            color: style.color,
          }}
        />
      </div>
    </div>
  )
}
export default ImageViewer
