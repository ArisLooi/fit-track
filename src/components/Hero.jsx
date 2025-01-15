
import Button from './Button'

// Hero component to display the main banner with call-to-action
export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Strong &<span className='text-blue-400'> Healthy</span></h1>
            </div>
            <p className='text-sm md:text-base font-light font-light'>
                I hereby acknowledgement that I am on a mission to achieve
                <span className='text-blue-400 font-medium'> incredible strength <span className='text-white'>and</span> peak fitness. </span>
                <br />
                embracing every challenge on the way to becoming
                <span className='text-blue-400 font-medium'> the best version of myself! </span>
            </p>
            <Button text={"Accept & Begin"}></Button>
        </div>
    )
}

