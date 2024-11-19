import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const InputCardWithDescription = ({ text, text2, btn1, title, p1, p2, colletralLenderPage }: any) => {
    return (
        <Card data-aos="fade-up" data-aos-delay="100" className={colletralLenderPage ? 'flex justify-center flex-col items-center m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow w-[400px] rounded-[8px]' : 'flex justify-center flex-col items-center m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow w-[320px] rounded-[8px]'}>
            <CardContent className='p-4'>
                <div className=' '>
                    <div className='flex items-center'>
                        <p>{text}</p>
                        <Input className='ms-2 border-2 border-black dark:border-white/40' type='number' onChange={() => {
                            console.log('add');
                        }} />
                        <p></p>
                    </div>
                    {
                        text2 &&
                        <div className='mt-5 flex items-center'>
                            <p>{text2}</p>
                            <Input className='ms-2 border-2 border-black dark:border-white/40' type='number' onChange={() => {
                                console.log('add');
                            }} />
                            <p></p>
                        </div>
                    }
                    <div className='flex justify-center my-4'>
                        <Button className='w-full border-2 border-black dark:border-white/40' variant={'themeColor'}>{btn1}</Button>
                    </div>
                    <Card className='border-[1px] border-black dark:border-gray-800 w-full rounded-[2px]'>
                        <CardHeader className='p-1'>
                            <CardTitle className='text-center leading-7'>{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-lg leading-6'>{p1}</p>
                            <p className='text-center text-lg leading-6'>{p2}</p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    )
}

export default InputCardWithDescription;