import { ReactNode } from 'react'
import Title from './Title'

function GroupInfo({
  title,
  children
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className='space-y-8'>
      <Title title={title} />
      {children}
    </div>
  )
}

export default GroupInfo
