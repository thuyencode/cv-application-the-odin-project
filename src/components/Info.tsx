import { ReactNode } from 'react'

const PERCENTAGES = {
  0: 'w-0',
  20: 'w-1/5',
  40: 'w-2/5',
  60: 'w-3/5',
  80: 'w-4/5',
  100: 'w-full'
} as const

type InfoProps =
  | {
      title: string
      percentage: keyof typeof PERCENTAGES
      children?: never
    }
  | {
      title: string
      percentage?: never
      children: ReactNode
    }

function Info({ title, children, percentage }: InfoProps) {
  return (
    <div>
      {percentage !== undefined ? (
        <p className='capitalize'>{title}</p>
      ) : (
        <>
          <p className='font-semibold uppercase'>{title}</p>
          <p className='text-gray-500'>{children}</p>
        </>
      )}

      {percentage !== undefined ? (
        <div className='mt-2 h-2 bg-gray-300'>
          <div className={`${PERCENTAGES[percentage]} h-full bg-gray-800`} />
        </div>
      ) : null}
    </div>
  )
}

export default Info
