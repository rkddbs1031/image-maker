import { ReactNode } from 'react'

import { cx } from 'styles'
import BubbleInfo from 'components/BubbleInfo'

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
    <dl className={cx([styles.label_row_container, className])}>
      <dt className={`${styles.label} ${hasInfo && styles.hasCursor}`}>
        {label}
        {hasInfo && infoText && <BubbleInfo infoText={infoText} width={190} className={styles.info} />}
      </dt>
      <dd className={`${styles.content_container} ${contentClassName}`}>{children}</dd>
    </dl>
  )
}

export default LabeledField
