import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'
import { FormInput } from 'components/Input'
import LabeledField from 'components/LabeledField'

import styles from './toolContainer.module.scss'

const TextForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeTitle = (title: string) => setStyle((prev) => ({ ...prev, title }))

  const handleChangeSubTitle = (subTitle: string) => setStyle((prev) => ({ ...prev, subTitle }))

  return (
    <div className={styles.text_container}>
      <LabeledField label='Title'>
        <FormInput.Text value={style.title} id='title' className={styles.title} onChange={handleChangeTitle} />
      </LabeledField>

      <LabeledField
        label='Sub Title'
        hasInfo
        infoText='서브타이틀의 정렬, 색상, 두께 그리고 폰트 스타일은 Title과 동일하며, 폰트 사이즈만 비례하여 노출됩니다.'
      >
        <FormInput.Text
          value={style.subTitle}
          id='sub_title'
          className={styles.subTitle}
          onChange={handleChangeSubTitle}
        />
      </LabeledField>
    </div>
  )
}

export default TextForm
