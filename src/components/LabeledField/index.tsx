import { ReactNode } from 'react'

import styles from './LabeledField.module.scss'

interface LabeledFieldPRops {
  label: string
  hasInfo?: boolean
  infoText?: string
  children: ReactNode
  className?: string
  contentClassName?: string
}

const LabeledField = ({
  label,
  children,
  hasInfo = false,
  infoText,
  className = '',
  contentClassName = '',
}: LabeledFieldPRops) => {
  return (
    <dl className={`${styles.label_row_container} ${className}`}>
      <dt className={`${styles.label} ${hasInfo && styles.hasCursor}`}>
        {label}
        {hasInfo && (
          <div className={styles.info}>
            <p>{infoText}</p>
          </div>
        )}
      </dt>
      <dd className={`${styles.content_container} ${contentClassName}`}>{children}</dd>
    </dl>
  )
}

export default LabeledField
