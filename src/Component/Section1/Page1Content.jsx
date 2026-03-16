import React from 'react'
import RightContent from './RightContent'
import LeftContent from './LeftContent'

const Page1Content = () => {
  return (
    <div className='py-8 gap-20 flex items-center h-[90vh] px-16'>
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default Page1Content
