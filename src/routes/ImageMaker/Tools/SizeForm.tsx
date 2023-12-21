import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'

import styles from './toolContainer.module.scss'

const SizeForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeWidth = (e: ChangeEvent<HTMLInputElement>) => {
    const width = Number(e.currentTarget.value) || 1
    setStyle((prev) => ({ ...prev, width }))
  }

  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>) => {
    const height = Number(e.currentTarget.value) || 1
    setStyle((prev) => ({ ...prev, height }))
  }

  return (
    <div className={styles.size_container}>
      <dl>
        <dt>사이즈</dt>
        <dd>
          <div className={styles.input_container}>
            <span className={styles.option_title}>width</span>
            <input
              type='text'
              name='width'
              value={style.width}
              min={1}
              onChange={handleChangeWidth}
              className={styles.input}
            />
          </div>
          <div className={styles.input_container}>
            <span className={styles.option_title}>height</span>
            <input
              type='text'
              name='height'
              value={style.height}
              min={1}
              onChange={handleChangeHeight}
              className={styles.input}
            />
          </div>
        </dd>
      </dl>
    </div>
  )
}

export default SizeForm
