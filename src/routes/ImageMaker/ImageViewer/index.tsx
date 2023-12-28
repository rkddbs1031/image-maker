import { useRecoilValue } from 'recoil'

import { styleState } from 'states/tool'

import styles from './imageViewer.module.scss'

const ImageViewer = () => {
  const style = useRecoilValue(styleState)

  const hasTitle = style.title.length > 0
  const hasSubTitle = style.subTitle.length > 0

  const layoutStyle = {
    width: style.width,
    height: style.height,
    ...(style.backgroundColor && { backgroundColor: style.backgroundColor }),
    ...(style.backgroundImage && { backgroundImage: `url(${style.backgroundImage})` }),
  }

  const titleStyle = {
    textAlign: style.alignType,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    fontFamily: style.fontFamily,
    color: style.color,
  }

  const subTitleStyle = {
    textAlign: style.alignType,
    fontSize: style.fontSize * 0.5,
    fontWeight: style.fontWeight,
    fontFamily: style.fontFamily,
    color: style.color,
  }

  const dimLayerBlur = {
    backdropFilter: `blur(${style.blur}px)`,
  }

  return (
    <div className={styles.image_viewer_container}>
      <div className={styles.canvas} style={layoutStyle} id='canvas'>
        {hasTitle && (
          <p style={titleStyle} className={styles.title}>
            {style.title}
          </p>
        )}

        {hasSubTitle && (
          <p className={styles.sub_title} style={subTitleStyle}>
            {style.subTitle}
          </p>
        )}

        {style.blur && <div className={styles.dim_layer} style={dimLayerBlur} />}
      </div>
    </div>
  )
}
export default ImageViewer
