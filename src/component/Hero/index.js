import Image from 'next/image'
import styles from './styles.module.css'

export default function Hero(){

    return(
        <div className='header w-full h-72 relative overflow-hidden flex flex-col gap-2 justify-center align-middle px-6'>
            <h1 className='text-3xl md:text-6xl text-center'>Taking control of your blogging life is easy when you know how</h1>
        
        </div>
    )
}