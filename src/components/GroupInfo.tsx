import { ReactNode } from 'react'
import Title from './Title'
import cn from '../utils'
import { ClassNameValue } from 'tailwind-merge'

type GroupInfoProps = {
  title: string
  className?: ClassNameValue
  children: ReactNode
  childrenContainerClassName?: ClassNameValue
}
function GroupInfo({
  title,
  className,
  children,
  childrenContainerClassName
}: GroupInfoProps) {
  return (
    <div className={cn(className, 'space-y-8')}>
      <Title title={title} />
      {typeof children !== 'object' ? (
        <p className='text-gray-500'>{children}</p>
      ) : (
        <div className={cn(childrenContainerClassName, 'space-y-8')}>
          {children}
        </div>
      )}
    </div>
  )
}

export default GroupInfo
