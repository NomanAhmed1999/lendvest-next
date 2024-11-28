import { LoaderPinwheel } from 'lucide-react'
import React from 'react'

function Loader() {
  return (
    <div className='fixed top-0 z-10 w-full h-screen flex items-center justify-center bg-gray-200 opacity-45'>
        <LoaderPinwheel className='animate-spin' />
    </div>
  )
}

export default Loader