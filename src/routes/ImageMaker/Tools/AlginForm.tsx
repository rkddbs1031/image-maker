import { useRecoilState } from 'recoil'

import { AlignType } from 'types/tool'
import { alignList } from 'utils/tool'
import { styleState } from 'states/tool'

import styles from './toolContainer.module.scss'
import DropDown from 'components/DropDown'

const AlignForm = () => {
  const [style, setStyle] = useRecoilState(styleState)

  const handleChangeAlginType = (alignType: AlignType) => setStyle((prev) => ({ ...prev, alignType }))

  return (
    <div className={styles.align_container}>
      <DropDown
        defaultValue={style.alignType}
        list={alignList}
        onClickDropDownList={handleChangeAlginType}
        height={90}
      />
    </div>
  )
}

export default AlignForm
