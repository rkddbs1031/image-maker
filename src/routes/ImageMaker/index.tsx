import Tools from './Tools'
import ImageViewer from './ImageViewer'

import styles from './imageMaker.module.scss'

const ImageMaker = () => {
  return (
    <section id={styles.content}>
      <h1 className='blind'>이미지 메이커</h1>

      <div className={styles.container}>
        <ImageViewer />
        <Tools />

        <div className={styles.download_container}>
          <button type='button'>DownLoad</button>
        </div>
      </div>
    </section>
  )
}
export default ImageMaker
