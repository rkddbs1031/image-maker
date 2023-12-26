import TextForm from './TextForm'
import BackgroundEditor from './BackgroundEditor'
import SizeForm from './SizeForm'
import AlignForm from './AlginForm'
import TextStyleForm from './TextStyleForm'

import styles from './toolContainer.module.scss'

const ToolContainer = () => {
  return (
    <div className={styles.tool_container}>
      <BackgroundEditor />
      <SizeForm />

      <div className={styles.palette_container}>
        <AlignForm />
        <TextStyleForm />
      </div>

      <TextForm />
    </div>
  )
}

export default ToolContainer
