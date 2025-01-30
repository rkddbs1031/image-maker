import { useRecoilValue } from 'recoil'

import { styleState } from 'states/tool'

import styles from './imageViewer.module.scss'

const ImageViewer = () => {
  const {
    title,
    subTitle,
    width,
    height,
    backgroundColor,
    backgroundImage,
    alignHorizontalType,
    alignVerticalType,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    padding,
  } = useRecoilValue(styleState)

  const hasTitle = title.length > 0
  const hasSubTitle = subTitle.length > 0

  const layoutStyle = {
    width,
    height,
    ...(backgroundColor && { backgroundColor }),
    ...(backgroundImage && { backgroundImage: `url(${backgroundImage})` }),
    justifyContent: alignVerticalType,
    padding: `${padding}px`,
  }

  const titleStyle = {
    textAlign: alignHorizontalType,
    fontSize,
    fontWeight,
    fontFamily,
    color,
  }

  const subTitleStyle = {
    textAlign: alignHorizontalType,
    fontSize: fontSize * 0.5,
    fontWeight,
    fontFamily,
    color,
  }

  return (
    <div className={styles.image_viewer_container}>
      <div className={styles.canvas} style={layoutStyle} id='canvas'>
        {hasTitle && (
          <p style={titleStyle} className={styles.title} id='title'>
            {title}
          </p>
        )}

        {hasSubTitle && (
          <p className={styles.sub_title} style={subTitleStyle} id='subTitle'>
            {subTitle}
          </p>
        )}
      </div>
    </div>
  )
}
export default ImageViewer
