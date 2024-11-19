'use client';
import Header from '@/components/custom/header'
import InputCardWithDescription from '@/components/custom/input-card-with-description';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Lender = () => {

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
      <div className='flex justify-center items-center flex-col mt-36'>
        <div className='w-[80%] flex justify-around flex-wrap'>
          <InputCardWithDescription text={'WETH'} text2={''} btn1={'Lend'} btn2={''} title={'WETH in Lendvest Contract'} p1={'WETH 0.000000'} p2={'US $0.00'} />
          

          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle>Borrower&apos;s Interest Owed in WETH</CardTitle>
            </CardHeader>
            <CardContent>

              <p className='text-center text-xl'>WETH 0.000000</p>
              <p className='text-center text-xl'>US $0.00</p>

            </CardContent>
          </Card>


          {/* <CardWithTwoBtns text='WETH' btn1='Withdraw WETH' btn2='' value='' valueTex='' isDouble={false} /> */}

          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center items-center h-[170px] w-[320px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardContent>
              <div className=' '>
                <div className='flex items-center'>
                  <p>WETH</p>
                  <Input value={''} type='text' className='ms-2 border-2 border-black dark:border-white/40' />
                </div>
                <div className='flex justify-center gap-2 mt-4'>
                  <Button className='w-full border-2 border-black dark:border-white/40' variant={'themeColor'}>Withdraw WETH</Button>
                </div>
              </div>
            </CardContent>
          </Card>



          <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle>Lender&apos;s Interest Earned in WETH</CardTitle>
            </CardHeader>
            <CardContent>

              <p className='text-center text-xl'>WETH 0.000000</p>
              <p className='text-center text-xl'>US $0.00</p>

            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Lender