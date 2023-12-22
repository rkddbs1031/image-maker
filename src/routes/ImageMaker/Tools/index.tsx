import SizeForm from './SizeForm'
import AlignForm from './AlginForm'
import TextStyleForm from './TextStyleForm'

import styles from './toolContainer.module.scss'
import BackgroundEditor from './BackgroundEditor'

const ToolContainer = () => {
  return (
    <div className={styles.tool_container}>
      <BackgroundEditor />
      <SizeForm />

      <div className={styles.palette_container}>
        <AlignForm />
        <TextStyleForm />
      </div>

      <button type='button'>Download</button>
    </div>
  )
}

export default ToolContainer
