import SizeForm from './SizeForm'
import AlignForm from './AlginForm'
import FontForm from './FontForm'

import styles from './toolContainer.module.scss'

const ToolContainer = () => {
  return (
    <div className={styles.tool_container}>
      <SizeForm />

      <div className={styles.palette_container}>
        <AlignForm />
        <FontForm />
      </div>

      <button type='button'>Download</button>
    </div>
  )
}

export default ToolContainer
