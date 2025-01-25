import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'

import { cx } from 'styles'
import styles from './toolContainer.module.scss'
import { FormInput } from 'components/Input'

const TextForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeTitle = (title: string) => setStyle((prev) => ({ ...prev, title }))

  const handleChangeSubTitle = (subTitle: string) => setStyle((prev) => ({ ...prev, subTitle }))

  return (
    <div className={styles.text_container}>
      <dl>
        <dd className={styles.text_option_title}>Title</dd>
        <dt className={styles.input_container}>
          <FormInput.Text value={style.title} id='title' className={styles.title} onChange={handleChangeTitle} />
        </dt>
      </dl>

      <dl>
        <dd className={cx(styles.text_option_title, styles.sub_title)}>
          Subtitle
          <div className={styles.sub_title_info}>
            서브타이틀의 정렬, 색상, 두께 그리고 폰트 스타일은 Title과 동일하며, 폰트 사이즈만 비례하여 노출됩니다.
          </div>
        </dd>
        <dt className={styles.input_container}>
          <FormInput.Text
            value={style.title}
            id='sub_title'
            className={styles.subTitle}
            onChange={handleChangeSubTitle}
          />
        </dt>
      </dl>
    </div>
  )
}

export default TextForm
