'use client';
import { useEffect, useState } from "react";
import Header from "@/components/custom/header";
import CardWithTwoBtns from "@/components/custom/card-with-two-btns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import JustBtn from "@/components/custom/just-btn";
import Market from "@/components/custom/market";
// import Footer from "../../Components/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Admin() {

  const [showWEthAddress, setShowWEthAddress] = useState(false)
  const [showWSTETHAddress, setShowWSTETHAddress] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    })
  }, [])





  return (
    <div>
      <Header isFull={true} />
      {/* <Timer /> */}
      <div className='flex justify-center items-center flex-col mt-36'>
        <div className='w-[85%] flex justify-between items-start flex-wrap'>
          <CardWithTwoBtns text='Minutes' btn1='Begin Term Loan' btn2='' value={''} valueText={''} isDouble={false} minutesDropdown={['5', '10', '15']} />

          <Card data-aos="fade-up" data-aos-delay="100" className='w-[320px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Lendvest APR</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>Lender APR: 1.06%</p>
              <p className='text-center text-xl'>Borrower APR: 1.30%</p>
            </CardContent>
          </Card>

          <JustBtn text='End Term Loan' small={true} />
        </div>

        <div className='w-[80%] flex justify-around flex-wrap'>
          <JustBtn text="Go To Lendvest's Ajna Pool" small={true} />
        </div>

        <Market />

        <div className='w-[80%] flex justify-around flex-wrap'>
          <JustBtn onBtnClick={() => { setShowWEthAddress(true) }} tokenAddress={showWEthAddress} text='Add WETH Address to Wallet' />
          <JustBtn onBtnClick={() => setShowWSTETHAddress(true)} tokenAddress={showWSTETHAddress} text="Add WSTETH Address to Wallet" />
        </div>

        <div className='w-[80%] flex justify-around flex-wrap'>
          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>Current User Interest Owe in</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH 0.00</p>
              <p className='text-center text-xl'>US $0.00</p>
            </CardContent>
          </Card>

          <Card data-aos="fade-up" data-aos-delay="100" className='w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
            <CardHeader>
              <CardTitle className='text-center text-xl'>WETH In Lendvest&apos;s Contract</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-center text-xl'>WETH 0.00</p>
              <p className='text-center text-xl'>US $0.00</p>
            </CardContent>
          </Card>

          {/* Add more Card components here as needed */}
        </div>
      </div>
    </div>
  )
}

export default Admin