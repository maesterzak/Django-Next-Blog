import Image from "next/image"
import Link from "next/link"

export default function PostCard(params) {
    
    return(
        
 <div className="w-[100%] md:w-[45%] mb-10 hover:shadow-2xl p-3">
    <div className="h-80 w-full bg-black overflow-hidden relative">
        <Image
        alt=""
        src={'/img/1.jpg'}
        width={700}
        height={700}
        sizes={"100vw"}
        style={{
            width:'100%',
            height:'auto'
        }}
        className="hover:scale-125"
        />
        <div className="absolute top-0 w-full h-full bg-[#15203554] hover:bg-[transparent] transition ease-in-out delay-150 hover:scale-125 duration-300 ">

        </div>
        
    </div>
    <div className="px-5 py-2 rounded-sm text-[#505050] w-[100px] mt-4 bg-[rgba(240,142,128,.1)]">
        category

    </div>
    <div className="mt-5">
        <Link href={'/'+'test'} className="text-[#152035] text-3xl header">Drifting Apart, Growing Happy</Link>

    </div>
    <div className="flex gap-4 align-middle h-14">
        <div className="relative w-10 h-10">
    <Image
     width={700}
     height={700}
     sizes={"100vw"}
     style={{
         width:'100%',
         height:'100%'
     }} 
     className="mt-2 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 " src="/img/1.jpg" alt="Bordered avatar" />
    </div>
    <span className="flex items-center ">Maesterzak</span>
    </div>
    <div className="mt-3">
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever sinc…
        </p>
    </div>
 </div>

    )
}