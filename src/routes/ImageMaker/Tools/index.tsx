import SizeForm from './SizeForm'
import styles from './toolContainer.module.scss'

const ToolContainer = () => {
  return (
    <div className={styles.tool_container}>
      <SizeForm />
      <button type='button'>Download</button>
    </div>
  )
}

export default ToolContainer
