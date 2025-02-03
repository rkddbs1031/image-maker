import { cx } from 'styles'
import styles from './bubbleInfo.module.scss'

interface BubbleInfoProps {
  infoText: string
  width: number
  className?: string
}

const BubbleInfo = ({ infoText, width, className = '' }: BubbleInfoProps) => {
  const bubbleInfoStyle = {
    width: `${width}px`,
  }

  return (
    <div className={cx([styles.bubble_info, className])} style={bubbleInfoStyle}>
      <p>{infoText}</p>
    </div>
  )
}
export default BubbleInfo
