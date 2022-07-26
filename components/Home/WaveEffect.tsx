const topWavePath = "M 0,600 C 0,600 0,200 0,200 C 101.39285714285714,193.03571428571428 202.78571428571428,186.07142857142858 313,196 C 423.2142857142857,205.92857142857142 542.25,232.75 660,232 C 777.75,231.25 894.2142857142858,202.92857142857144 1024,193 C 1153.7857142857142,183.07142857142856 1296.892857142857,191.53571428571428 1440,200 C 1440,200 1440,600 1440,600 Z";
const bottomWavePath = "M 0,600 C 0,600 0,400 0,400 C 134.85714285714286,415.3571428571429 269.7142857142857,430.7142857142857 378,434 C 486.2857142857143,437.2857142857143 568.0000000000001,428.5 685,417 C 801.9999999999999,405.5 954.2857142857142,391.2857142857143 1086,388 C 1217.7142857142858,384.7142857142857 1328.857142857143,392.3571428571429 1440,400 C 1440,400 1440,600 1440,600 Z";

export default function WaveEffect({ reverse } : { reverse?: boolean }) {
    return (
        <div className={reverse ? "rotate-180 mb-[-120px] md:mb-[-150px] z-20" : "z-20"}>
            <div className='h-0'>
                <svg preserveAspectRatio="none" width="100%" height="300px" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-[10] relative'>
                    <path d={topWavePath} stroke="none" strokeWidth="0" fill="#009eb5" />
                </svg>
            </div>

            <div className='h-0'>
                <svg preserveAspectRatio="none" width="100%" height="300px" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-[20] relative'>
                    <path d={bottomWavePath} stroke="none" strokeWidth="0" fill="#075985">
                    </path>
                </svg>
            </div>

            <div className='h-[300px]' />
        </div>
    )
}