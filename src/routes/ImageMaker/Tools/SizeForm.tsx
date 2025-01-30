import { useRecoilState } from 'recoil'

import { styleState } from 'states/tool'
import { FormInput } from 'components/Input'
import LabeledField from 'components/LabeledField'

import styles from './toolContainer.module.scss'

const SizeForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeWidth = (width: number) => setStyle((prev) => ({ ...prev, width }))

  const handleChangeHeight = (height: number) => setStyle((prev) => ({ ...prev, height }))

  return (
    <div className={styles.size_container}>
      <LabeledField label='Width'>
        <FormInput.Number name='width' value={style.width} className={styles.input} onChange={handleChangeWidth} />
      </LabeledField>
      <LabeledField label='height'>
        <FormInput.Number name='height' value={style.height} className={styles.input} onChange={handleChangeHeight} />
      </LabeledField>
    </div>
  )
}

export default SizeForm
