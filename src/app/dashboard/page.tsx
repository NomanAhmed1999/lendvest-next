'use client';
import Header from '@/components/custom/header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { MetaMaskInpageProvider } from "@metamask/providers";


const Dashboard = () => {

    return (
        <>
            <Header isFull={true} />
            {/* <Timer /> */}
            <div className='flex dark:bg-black justify-center items-center mt-36'>
                <div className='w-[75%] flex justify-between items-center flex-wrap'>
                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>Borrower&apos;s Interest Owed in WETH</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>WETH In Lendvest&apos;s Contract</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>WSTETH In Lendvest&apos;s Contract</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WSTETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>Amount Lent on Aave</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>Amount Lent on Aave (Accounting)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>Lender&apos;s Amount in WETH</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
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

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>Borrower&apos;s Collateral in WSTETH</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>Collateral Lender&apos;s Amount Deposited in WSTETH</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-center text-xl'>WETH 0.000000</p>
                            <p className='text-center text-xl'>US $0.00</p>
                        </CardContent>
                    </Card>

                    <Card data-aos="fade-up" data-aos-delay="100" className='flex justify-center flex-col items-center h-[170px] w-[400px] m-5 bg-transparent border-[2px] border-black dark:border-gray-800 card-shadow rounded-[8px]'>
                        <CardHeader>
                            <CardTitle>Cross Collateral WSTETH Used</CardTitle>
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

export default Dashboard