import Image from "next/image";
import Link from "next/link";

function Post(){
    const similar = [1,2,4]

    return(
        <>
        <div className="w-full flex flex-wrap px-2  justify-center gap-2">
            <div className="w-[100%] md:w-[70%]  ">
                <div className="w-[100%] p-5 bg-[#ffff]">
                <h1 className="header text-3xl">Drifting Apart, Growing Happy</h1>
                <div className="flex gap-4 align-middle h-14">
                <span className="flex items-center ">Category</span>    
                <span className="flex items-center ">May 23, 2023</span>
                </div>

                <div className="w-full bg-black overflow-hidden relative">
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
                    
                    
                    />
                    
                    
                </div>

                <div>
                    <p className="mt-3">
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Lorem Ipsum has been the industry's
                The generated Lorem Ipsum is therefore always
                Making this the first true generator
                <br />
                <br />
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                <br />
                <br />
                It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                    </p>
                </div>
                </div>

                <div className="border-t-2 p-5 bg-[#fdfdff] border-[rgba(240,142,128,.1)] flex">
                    <span>tags</span>
                </div>

                <div className="border-t-2 p-2 px-5 py-0 bg-[#fdfdff] flex align-middle items-center border-[rgba(240,142,128,.1)]">
                <div className="w-[auto] overflow-hidden ">
                <Image
                alt=""
                src={'/img/facebook.svg'}
                width={100}
                height={700}
                // sizes={"100vw"}
                style={{
                    width:'35%',
                    height:'auto'
                }}
                
                
                />
                    
                    
                </div>

                <div className="w-[auto] overflow-hidden ">
                <Image
                alt=""
                src={'/img/whatsapp.svg'}
                width={100}
                height={700}
                // sizes={"100vw"}
                style={{
                    width:'35%',
                    height:'auto'
                }}
                
                
                />
                    
                    
                </div>

                <div className="w-[auto]overflow-hidden ">
                <Image
                alt=""
                src={'/img/twitter.svg'}
                width={100}
                height={700}
                // sizes={"100vw"}
                style={{
                    width:'35%',
                    height:'auto'
                }}
                
                
                />
                    
                    
                </div>

                <div className="w-[auto] overflow-hidden ">
                <Image
                alt=""
                src={'/img/reddit.svg'}
                width={100}
                height={700}
                // sizes={"100vw"}
                style={{
                    width:'35%',
                    height:'auto'
                }}
                
                
                />
                    
                    
                </div>

                <div className="w-full p-5">
                    

                </div>

                </div>

                <div className="border-t-2 mt-3 p-5 bg-[#fdfdff] ">
                    <span className="header">YOU MAY LIKE THIS POST</span>
                    <div className="flex gap-2 flex-wrap">
                        {similar.map((item, index)=>{
                            return(
                                <>
                                <div className="w-[100%] md:w-[32%] mb-10 hover:shadow-2xl mt-2 p-3">
                                    <div className=" w-full bg-black overflow-hidden ">
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
                                    
                                    
                                    />
                                        
                                        
                                    </div>
                                    
                                    <div className="mt-2">
                                        <Link href={'#'} className="text-[#152035] text-1xl header">Drifting Apart, Growing Happy</Link>

                                    </div>
                                    
                                    
                                </div>
                                </>
                            )
                        })}

                    </div>
                </div>

                <div className="bg-[#fdfdff] border-t-2 mt-3 p-5 grid">
                <span className="header mb-2">ADD A COMMENT</span>
                <span><i>0 comments</i></span>
                <div className="mt-3">
                    <textarea className="w-[95%] min-h-[200px] border-2 border-[#f3d4bc] p-5">

                    </textarea>
                </div>

                </div>

                

            </div>
            <div className="w-[100%] md:w-[25%] ">
                <div className="bg-[#ffff] ">
                    <div className="p-5 border-b-2 border-[rgba(240,142,128,.1)]">
                    <span className="header w-full">MOST POPULAR</span>

                    </div>
                    <div>
                        {similar.map((item, index)=>{
                            return(
                                <div className="flex w-full p-4">
                                    <div className="w-[25%] h-16 ">
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
                                        <span className="text-[13px]">12, may 2018</span>
                                     </div>     


                                </div>

                            )
                        })}
                    </div>
                    

                </div>

                <div className="bg-[#ffff] mt-5">
                    <div className="p-5 border-b-2 border-[rgba(240,142,128,.1)]">
                    <span className="header w-full">CATEGORIES</span>

                    </div>
                    <div className="flex gap-1 flex-wrap p-5">
                        {similar.map((item, index)=>{
                            return(
                                <div className="p-2 rounded-sm text-[#505050] mt-4 bg-[rgba(240,142,128,.1)]">

<Link href={'#'} className="text-[#152035] ">
        category
        </Link>

    </div>

                            )
                        })}
                    </div>
                    

                </div>

            </div>



        </div>
        </>
    )
}
export default Post;