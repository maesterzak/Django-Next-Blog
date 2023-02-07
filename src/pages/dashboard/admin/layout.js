

function AdminLayout({children}){

    return(
        <>
        <div className="w-full flex flex-wrap">
            <div className="w-[20%] border-r-4 border-[rgba(240,142,128,.1)] h-[80vh] flex flex-col gap-3">
            <button>Dashboard</button>
                <button>Posts</button>
                <button>Comments</button>

            </div>
            <div className="w-[95%] md:w-[80%]">
                {children}

            </div>

        </div>
        </>
    )
}
export default AdminLayout;