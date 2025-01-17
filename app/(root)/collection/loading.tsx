import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <section>
      <h1 className='h1-bold text-dark100_light900'>Saved Questions</h1>
      <div className='mb-12 mt-11 flex flex-wrap gap-5'>
        <Skeleton className='h-14 flex-1' />
        <Skeleton className='h-14 w-28' />
      </div>

      <div className='flex flex-col gap-6'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton className='h-60 w-full rounded-2xl sm:w-[260px]' key={index} />
        ))}
      </div>
    </section>
  )
}

export default Loading