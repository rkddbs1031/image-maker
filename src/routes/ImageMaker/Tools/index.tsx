import AlignForm from './AlginForm'
import SizeForm from './SizeForm'
import styles from './toolContainer.module.scss'

const ToolContainer = () => {
  return (
    <div className={styles.tool_container}>
      <SizeForm />

      <div className={styles.palette_container}>
        <AlignForm />
      </div>

      <button type='button'>Download</button>
    </div>
  )
}

export default ToolContainer
