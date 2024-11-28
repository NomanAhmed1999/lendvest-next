import React, { useEffect } from 'react'
import { Progress } from '../ui/progress'

const Timer = ({duration, isActive, setDuration, deadline, handleReset, epochStatus}: any) => {

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setDuration((duration: any) => {
          if (duration > 0) {
            return duration - 1;
          } else {
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
    } else if (!isActive && duration !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);

  }, [isActive]);




  return (
    <div className='flex justify-center py-2 border-b-[1px] border-black dark:border-gray-800'>
      <div className='w-[78%] flex items-center justify-around'>
        <p className='font-bold text-xl'>Term Status: {epochStatus}</p>
        <Progress className='w-[50%] h-3' value={43} />
        <p className='font-bold text-xl'>Timer: {deadline}</p>
      </div>
    </div>
  )
}

export default Timer