import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'

import styles from './toolContainer.module.scss'

const TextForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setStyle((prev) => ({ ...prev, title: e.currentTarget.value }))

  return (
    <div className={styles.text_container}>
      <dl>
        <dd className={styles.text_option_title}>title</dd>
        <dt className={styles.input_container}>
          <input id='title' type='text' value={style.title} className={styles.title} onChange={handleChangeTitle} />
        </dt>
      </dl>
    </div>
  )
}

export default TextForm
