import { ChangeEvent, useState } from 'react'
import styles from './toolContainer.module.scss'
import { Size } from 'types/tool'

const InitSize = { width: 300, height: 500 }

const ToolContainer = () => {
  const [size, setSize] = useState<Size>(InitSize)

  const handleChangeWidth = (e: ChangeEvent<HTMLInputElement>) => {
    const width = Number(e.currentTarget.value) || 1
    setSize((prev) => ({ ...prev, width }))
  }

  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>) => {
    const height = Number(e.currentTarget.value) || 1
    setSize((prev) => ({ ...prev, height }))
  }

  return (
    <div className={styles.tool_container}>
      <div className={styles.size_container}>
        <dl>
          <dt>사이즈</dt>
          <dd>
            <div className={styles.input_container}>
              <span className={styles.option_title}>width</span>
              <input
                type='text'
                name='width'
                value={size.width}
                min={1}
                onChange={handleChangeWidth}
                className={styles.input}
              />
            </div>
            <div className={styles.input_container}>
              <span className={styles.option_title}>height</span>
              <input
                type='text'
                name='height'
                value={size.height}
                min={1}
                onChange={handleChangeHeight}
                className={styles.input}
              />
            </div>
          </dd>
        </dl>
      </div>

      <button type='button'>Download</button>
    </div>
  )
}

export default ToolContainer
