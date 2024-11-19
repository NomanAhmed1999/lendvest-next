'use client';

import Header from '@/components/custom/header'
import InputCardWithDescription from '@/components/custom/input-card-with-description'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Borrow = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
      <Header />
      {/* <Timer /> */}
      <div className='flex justify-center items-center mt-36'>
        <div className='w-[75%] flex justify-between items-end flex-wrap'>
          <InputCardWithDescription text={'WSTETH'} text2={'WETH'} btn1={'Borrow'} btn2={''} title={"Borrower's Loan Taken on Ajna and Lent on Aave in WETH"} p1={'WETH 0.000000'} p2={'US $0.00'} />


          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle>Amount Lent on Aave</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH 0.000000</p>
              <p className='text-center text-xl'>US $0.00</p>

            </CardContent>
          </Card>

          <InputCardWithDescription text={'WSTETH'} text2={'WETH'} btn1={'Repay'} btn2={''} title={"Borrower's Interest Owed in WETH"} p1={'WETH 0.000000'} p2={'US $0.00'} />


          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle>Borrower&apos;s Collateral in WSTETH</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WSTETH 0.000000</p>
              <p className='text-center text-xl'>US $0.00</p>

            </CardContent>
          </Card>


          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center items-center h-[170px] w-[320px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardContent>
              <div className=' '>
                <div className='flex items-center'>
                  <p>WETH</p>
                  <Input value={''} type='text' className='ms-2 border-2 border-black dark:border-white/40' />
                </div>
                <div className='flex justify-center mt-4'>
                  <Button className='w-full border-2 border-black dark:border-white/40' variant={'themeColor'}>Withdraw WETH</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Borrow