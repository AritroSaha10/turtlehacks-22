import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export default function WaveEffect() {
    const [waveHeight, setWaveHeight] = useState('0px');
    const [bottomWaveHeight, setBottomWaveHeight] = useState('0px');

    useScrollPosition(({ currPos }) => {
        const currScroll = clamp(Math.abs(currPos.y), 0, 925);
        let curveVal = currScroll / 925 * Math.PI;

        const topHeight = Math.abs(Math.sin(curveVal) * 200);
        const bottomHeight = Math.abs(Math.sin(curveVal) * 300);

        setWaveHeight(`${topHeight}px`);
        setBottomWaveHeight(`${bottomHeight}px`);
    })

    return (
        <>
            <div className='h-0 bottom-0 flex items-end'>
                <svg preserveAspectRatio="none" width="100%" height={waveHeight} viewBox="0 0 754 144" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-[20] relative'>
                    <path d="M0 144V0C123 0 106.5 56.5 192 56.5C273.5 56.5 327.5 0 392 0C456.5 0 503.474 56.5 581.5 56.5C646 56.5 718.833 27.8333 754 0V144H0Z" fill="#075985">
                    </path>
                </svg>
            </div>

            <div className='h-0 bottom-0 flex items-end'>
                <svg preserveAspectRatio="none" width="100%" height={bottomWaveHeight} viewBox="0 0 754 144" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-10 relative'>
                    <path d="M0 144V0C123 0 106.5 56.5 192 56.5C273.5 56.5 327.5 0 392 0C456.5 0 503.474 56.5 581.5 56.5C646 56.5 718.833 27.8333 754 0V144H0Z" fill="#009eb5">
                    </path>
                </svg>
            </div>
        </>
    )
}