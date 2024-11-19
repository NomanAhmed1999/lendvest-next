'use client';


import CardWithTwoBtns from '@/components/custom/card-with-two-btns'
import Header from '@/components/custom/header'
import InputCardWithDescription from '@/components/custom/input-card-with-description'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
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
      <div className='w-[75%] flex justify-between flex-wrap'>
        <CardWithTwoBtns text={'WSTETH'} btn1={'Withdraw Collateral'} btn2={''} value={''} valueText={''} isDouble={''} minutesDropdown={''} />
        
        <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center w-[400px] h-[170px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
          <CardHeader>
            <CardTitle>Cross Collateralization in Reserve</CardTitle>
          </CardHeader>
          <CardContent>

            <p className='text-center text-xl'>WETH 0.000000</p>
            <p className='text-center text-xl'>US $0.00</p>

          </CardContent>
        </Card>



        <div className='w-[400px]'>
        <InputCardWithDescription text={'WSTETH'} text2={''} btn1={'Lend'} btn2={''} title={"WSTETH In Lendvest's Contract"} p1={'WSTETH 0.000000'} p2={'US $0.00'} colletralLenderPage={false} />
        </div>
        
        <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center w-[400px] h-[170px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
          <CardHeader>
            <CardTitle>Collateral Lender&apos;s Amount Deposited in WSTETH</CardTitle>
          </CardHeader>
          <CardContent>

            <p className='text-center text-xl'>WSTETH 0.000000</p>
            <p className='text-center text-xl'>US $0.00</p>

          </CardContent>
        </Card>

        {/* <p></p> */}
        <div className='w-[400px]'></div>
        <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
          <CardHeader>
            <CardTitle>Collateral Lender&apos;s Amount Lent in WSTETH</CardTitle>
          </CardHeader>
          <CardContent>

            <p className='text-center text-xl'>WSTETH 0.000000</p>
            <p className='text-center text-xl'>US $0.00</p>

          </CardContent>
        </Card>
      </div>
    </div>
  </>
  )
}

export default Lender