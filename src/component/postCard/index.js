import Image from "next/image"
import Link from "next/link"

export default function PostCard(params) {
    
    return(
        
 <div className="w-[100%] md:w-[45%] mb-10">
    <div className="h-80 w-full relative bg-black">
        <Image
        alt=""
        src={'/img/1.jpg'}
        layout='fill'

        />
        
    </div>
    <div className="px-5 py-2 rounded-sm text-[#505050] w-[100px] mt-4 bg-[rgba(240,142,128,.1)]">
        category

    </div>
    <div className="mt-5">
        <h2 className="text-[#152035] text-3xl">Drifting Apart, Growing Happy</h2>

    </div>
    <div className="flex gap-4 align-middle h-14">
        <div className="relative w-10 h-10">
    <Image layout="fill" class="mt-2 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/img/1.jpg" alt="Bordered avatar" />
    </div>
    <span className="flex items-center">Maesterzak</span>
    </div>
    <div className="mt-3">
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc…
        </p>
    </div>
 </div>

    )
}