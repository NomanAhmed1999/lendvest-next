'use client';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { Moon, SunIcon } from 'lucide-react';
import lendvestLogo from '../../app/lendvest-logo-black.png';
import lendvestLogoBlack from '../../app/lendvest-logo.png';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/zustand/store';
import ConnectWallet from './connect-wallet';
import Timer from './timer';



const Header = ({ isFull, onBtnClick, wallet, duration, isActive, setDuration, deadline, handleReset }: any) => {
    const theme = useStore((state: any) => state.theme)
    const updateTheme = useStore((state: any) => state.updateTheme)
    const router = useRouter();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])

    const toggleTheme = () => {
        updateTheme(theme === 'light' ? 'dark' : 'light')
        // dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
    }


    return (
        <div className='fixed top-0 w-full bg-white dark:bg-black z-10'>
            <div className='p-6 border-b-[1px] border-black dark:border-gray-800'>
                <div className='flex justify-between'>
                    <Image className='cursor-pointer' onClick={() => { router.push('/') }} src={theme === 'dark' ? lendvestLogoBlack : lendvestLogo} alt='logo' />

                    {
                        isFull ?
                            <div className='flex gap-4 justify-center'>

                                <Button className='w-[100px]' onClick={() => router.push('/beta')} variant={'themeColor'}>Beta</Button>
                                <Button className='w-[100px]' onClick={() => router.push('/admin')} variant={'themeColor'}>Auto Admin</Button>
                                <Button className='w-[100px]' onClick={() => router.push('/lender')} variant={'themeColor'}>Lender</Button>
                                <Button className='w-[100px]' onClick={() => router.push('/borrower')} variant={'themeColor'}>Borrower</Button>
                                <Button onClick={() => router.push('/collateral-lender')} variant={'themeColor'}>Collateral Lender</Button>
                                <Button onClick={onBtnClick} variant={'themeColor'}>{wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : 'Connect Wallet'}</Button>
                                {/* <ConnectWallet /> */}
                            </div>
                            :
                            <div className='flex w-full gap-4 justify-end me-4'>
                                <Button className='w-[130px]' onClick={() => router.push('/')} variant={'themeColor'}>Home</Button>
                                <Button onClick={onBtnClick} variant={'themeColor'}>{wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : 'Connect Wallet'}</Button>
                                {/* <ConnectWallet /> */}
                            </div>

                    }


                    <Button onClick={toggleTheme} variant={'themeColor'}>
                        {
                            theme !== 'light' ?
                                <>
                                    <Moon className="mr-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    Switch Theme
                                </>
                                :
                                <>
                                    <SunIcon className="mr-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    Switch Theme
                                </>
                        }

                    </Button>
                </div>
            </div>
            <Timer duration={duration} isActive={isActive} setDuration={setDuration} deadline={deadline} handleReset={handleReset} />
        </div>
    )
}

export default Header