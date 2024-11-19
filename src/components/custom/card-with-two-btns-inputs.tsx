'use client';

import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { convertInUSD } from '@/lib/helper';

function CardWithTwoBtnsTwoInputs({ text, text2, btn1, btn2, isDouble, onBtnClick, label1, label2, value1, setFunc1, value2, setFunc2, amountWethToUSD, amountWSTethToUSD, apprveFunc }: any) {


    const [quoteDollar, setQuoteDollar] = useState('0.00');
    const [collateralDollar, setCollateralDollar] = useState('0.00');

    const handleChange1 = (e: any) => {
        setFunc1(e.target.value);
        const amount = convertInUSD(e.target.value, amountWSTethToUSD);
        setCollateralDollar(amount);

    }



    const handleChange2 = (e: any) => {
        setFunc2(e.target.value);
        const amount = convertInUSD(e.target.value, amountWethToUSD);
        setQuoteDollar(amount);
    }


    return (
        <Card data-aos="fade-up" data-aos-delay="100" className='p-2 pt-5 flex justify-center items-center w-[320px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardContent>
                <div className=' '>
                    <div className='flex gap-2'>
                        <p>{text}</p>
                        <Input placeholder={label1} value={value1} onChange={(e) => handleChange1(e)} type='number' className='border-2 border-black dark:border-white/40' />
                        <p>${collateralDollar}</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <p>{text2}</p>
                        <Input placeholder={label2} value={value2} onChange={(e) => handleChange2(e)} type='number' className='border-2 border-black dark:border-white/40' />
                        <p>${quoteDollar}</p>
                    </div>
                    <div className='flex justify-center flex-col gap-2 mt-4'>
                        <Button onClick={apprveFunc} className='w-full border-2 border-black dark:border-white/40' variant={'themeColor'}>{btn1}</Button>
                        {
                            isDouble &&
                            <Button onClick={onBtnClick} className='w-full border-2 border-black dark:border-white/40' variant={'themeColor'}>{btn2}</Button>
                        }
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardWithTwoBtnsTwoInputs;