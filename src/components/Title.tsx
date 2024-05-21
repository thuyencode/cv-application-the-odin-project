function Title({ title }: { title: string }) {
  return (
    <div>
      <h3 className='uppercase'>{title}</h3>
      <div className='mt-2 h-1 w-12 bg-gray-900' />
    </div>
  )
}

export default Title
