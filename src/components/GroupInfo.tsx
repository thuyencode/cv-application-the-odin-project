import { ReactNode } from 'react'
import Title from './Title'
import cn from '../utils'

type GroupInfoProps = {
  title: string
  className?: string
  children: ReactNode
}
function GroupInfo({ title, className, children }: GroupInfoProps) {
  return (
    <div className={cn(className, 'space-y-8')}>
      <Title title={title} />
      {typeof children !== 'object' ? (
        <p className='text-gray-500'>{children}</p>
      ) : (
        children
      )}
    </div>
  )
}

export default GroupInfo
