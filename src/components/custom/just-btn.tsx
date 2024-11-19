import React from 'react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

function JustBtn({text, small, tokenAddress, onBtnClick}: any) {
    return (
        <Card data-aos="fade-up" data-aos-delay="100" className={small ? 'p-5 py-10 flex justify-center items-center min-h-[100px] w-[320px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]' :
            'p-5 flex flex-col justify-center items-center min-h-[100px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'
        }>
            <Button onClick={onBtnClick} className='w-full' variant={'themeColor'}>{text}</Button>
            {tokenAddress && (
                <p style={{ display: 'block', marginTop: '8px' }}>
                    Quote Token Address: {tokenAddress}
                </p>
             )}
        </Card>
    )
}

export default JustBtn