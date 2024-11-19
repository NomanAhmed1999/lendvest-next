import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import JustBtn from './just-btn';

const Market = () => {

    const goToWeb = (url: string) => {
        const newWindow = window.open(url, '_blank');
        if (newWindow) {
          newWindow.focus();
        } else {
          console.error('Failed to open new window or tab (possibly blocked by popup blocker)');
        }
    }

    
    return (
        <Card data-aos="fade-up" data-aos-delay="100" className='w-[82%] my-4 flex justify-center flex-col'>
            <CardHeader>
                <CardTitle className='text-center text-2xl'>Markets</CardTitle>
            </CardHeader>
            <CardContent className='w-[100%] flex justify-around flex-wrap'>
                    <JustBtn onBtnClick={() => goToWeb('https://app.aave.com/markets/?marketName=proto_mainnet')} text="Aave V2" />
                    <JustBtn onBtnClick={() => goToWeb('https://app.aave.com/markets/?marketName=proto_mainnet_v3')} text="Aave V3" />
                    <JustBtn onBtnClick={() => goToWeb('https://analytics.morpho.org/')} text="Morpho-Aave V2" />
                    <JustBtn onBtnClick={() => goToWeb('https://analytics.morpho.org')} text="Morpho-Aave V3" />
            </CardContent>
        </Card>
    )
}

export default Market