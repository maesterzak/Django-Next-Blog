import Image from 'next/image'
import styles from './styles.module.css'

export default function Hero(){

    return(
        <div className='w-full h-72 relative overflow-hidden flex flex-col gap-2 justify-center align-middle'>
            <h1 className='text-2xl md:text-6xl text-center'>Take control of your blogging life</h1>
            <h1 className='text-2xl md:text-6xl text-center'>Life is easy when you know how</h1>
            
        </div>
    )
}