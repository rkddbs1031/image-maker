import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'
import { FormInput } from 'components/Input'

import styles from './toolContainer.module.scss'

const SizeForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeWidth = (width: number) => setStyle((prev) => ({ ...prev, width }))

  const handleChangeHeight = (height: number) => setStyle((prev) => ({ ...prev, height }))

  return (
    <div className={styles.size_container}>
      <dl>
        <dt>사이즈</dt>
        <dd>
          <div className={styles.input_container}>
            <span className={styles.option_title}>width</span>
            <FormInput.Number
              name='width'
              value={style.width}
              min={1}
              className={styles.input}
              onChange={handleChangeWidth}
            />
          </div>
          <div className={styles.input_container}>
            <span className={styles.option_title}>height</span>
            <FormInput.Number
              name='height'
              value={style.height}
              min={1}
              className={styles.input}
              onChange={handleChangeHeight}
            />
          </div>
        </dd>
      </dl>
    </div>
  )
}

export default SizeForm
