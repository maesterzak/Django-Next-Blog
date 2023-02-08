import AdminLayout from "../layout";
import Link from "next/link";
import Image from "next/image";
const data =[1,2,3,4]

function Post(){

    return(
        <AdminLayout>
            <div className="w-full p-4">
                <h1 className="header">POST</h1>
                <div className="w-full flex justify-end">
                <button href="#" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
  
  add
</button>

                </div>

                <div className="w-full flex-col">
                <div>
                        {data.map((item, index)=>{
                            return(
                                <div className="flex w-full p-4" key={index}>
                                    <div className="w-[25%] md:w-[10%] h-16 ">
                                    <Image
                                    alt=""
                                    src={'/img/1.jpg'}
                                    width={700}
                                    height={700}
                                    sizes={"100vw"}
                                    style={{
                                        width:'100%',
                                        height:'100%'
                                    }}
                                    
                                    
                                    />

                                    </div>  
                                    <div className="w-[75%] px-3 grid">
                                    <Link href={'#'} className="text-[#152035] text-[14px] header">Drifting Apart Growing Happy</Link>
                                        <div className=" flex gap-3">
                                        <span className="text-[13px]">12, may 2018</span>
                                        <button href="#" className="inline-flex items-center px-1  mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                            edit
                                            </button>
                                            <button href="#" className="inline-flex items-center px-1  mr-3 text-sm font-medium  bg-[#f08e80] border border-gray-300 rounded-lg text-white hover:text-[#505050]">
                                            delete
                                            </button>
                                            </div>

                                     </div>     


                                </div>

                            )
                        })}
                    </div>

                </div>

                

                

            </div>

        </AdminLayout>    
    )
}
export default Post;