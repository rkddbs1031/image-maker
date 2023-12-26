import { useRecoilValue } from 'recoil'

import html2canvas from 'html2canvas'

import { styleState } from 'states/tool'

import Tools from './Tools'
import ImageViewer from './ImageViewer'

import styles from './imageMaker.module.scss'

const ImageMaker = () => {
  const { width, height, title } = useRecoilValue(styleState)

  const handleCapture = () => {
    const canvasTarget = document.getElementById('canvas')

    if (!canvasTarget) return

    html2canvas(canvasTarget, { width, height, scale: 1 }).then((canvas) => {
      const link = document.createElement('a')

      document.body.appendChild(link)

      link.href = canvas.toDataURL('image/png')
      link.download = `${title.split(' ').join('_')}.png`
      link.click()

      document.body.removeChild(link)
    })
  }

  return (
    <section id={styles.content}>
      <h1 className='blind'>이미지 메이커</h1>

      <div className={styles.container}>
        <ImageViewer />
        <Tools />

        <div className={styles.download_container}>
          <button type='button' onClick={handleCapture} className={styles.download_button}>
            DownLoad
          </button>
        </div>
      </div>
    </section>
  )
}
export default ImageMaker
