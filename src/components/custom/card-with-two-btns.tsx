'use client';
import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { convertInUSD } from '@/lib/helper';
function CardWithTwoBtns({ text, btn1, btn2, label, value, isDouble, minutesDropdown, onBtnClick, onSecBtnClick, amountInUSD, setFunc, crypto }: any) {
    const [quoteDollar, setQuoteDollar] = useState('0.00');

    const handleChange = (e: any) => {
        setFunc(e.target.value);
        if (crypto) {
            const amount = convertInUSD(e.target.value, amountInUSD);
            setQuoteDollar(amount);
        }
    }
    const [min, setMin] = useState('5')


    return (
        <Card data-aos="fade-up" data-aos-delay="100" className='p-2 pt-5 flex justify-center items-center w-[320px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardContent>
                <div className=''>
                    <div className='flex items-center justify-between'>
                        <p className='me-2'>{text}</p>
                        {
                            minutesDropdown ?
                                <Select value={min} onValueChange={setMin}>
                                    <SelectTrigger className='border-2 border-black dark:border-white/40 w-[180px]'>
                                        <SelectValue placeholder="Time" />
                                    </SelectTrigger>
                                    <SelectContent className='border-2 border-black dark:border-white/40'>
                                        {
                                            minutesDropdown.map((minutes: string) => {
                                                return (
                                                    <SelectItem key={minutes} value={minutes}>{minutes} Min</SelectItem>
                                                )
                                            })
                                        }
                                    </SelectContent>
                                </Select>
                                :
                                // <div>
                                    <Input type='number' placeholder={label} value={value} onChange={(e) => handleChange(e)} className='border-2 border-black dark:border-white/40' />
                                // </div>

                        }
                        {
                            crypto && <label style={{ marginLeft: '10px' }}>${quoteDollar}</label>
                        }
                    </div>
                    <div className='flex justify-center flex-col mt-4'>
                        <Button onClick={onBtnClick} className='w-full border-2 border-black dark:border-white/40' variant={'themeColor'}>{btn1}</Button>
                        {
                            isDouble &&
                            <Button onClick={onSecBtnClick} className='mt-5 w-full border-2 border-black dark:border-white/40' variant={'themeColor'}>{btn2}</Button>
                        }
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardWithTwoBtns