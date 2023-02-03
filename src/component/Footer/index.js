import Image from 'next/image'
import styles from './styles.module.css'

export default function Footer(){

    return(
        <>
        
<footer className="p-4 border-t-4 border-[rgba(240,142,128,.1)] rounded-lg shadow md:px-6 md:py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 ">
            <div className='relative h-14 w-14'>
            <Image src="https://flowbite.com/docs/images/logo.svg" layout='fill' className="h-8 mr-3" alt="Flowbite Logo" />
            </div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-[#505050] sm:mb-0">
            <li>
                <a href="#" className="mr-4 hover:underline  md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm sm:text-center text-[#505050]">© 3 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
</footer>

        </>
    )
}