import Link from "next/link";

function AdminLayout({ children }) {
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-[20%] border-r-4 border-[rgba(240,142,128,.1)] h-[80vh] flex flex-col text-[white] items-center gap-3">
          <Link
            href={"/dashboard/admin"}
            className="rounded-sm bg-[#f08e80] hover:text-[white] w-36 p-2 flex justify-center"
          >
            Dashboard
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80] p-2 hover:text-[white] w-36 flex justify-center"
          >
            Posts
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Comments
          </Link>
          <Link
            href={"/dashboard/admin/post"}
            className="rounded-sm bg-[#f08e80]   p-2 hover:text-[white] w-36 flex justify-center"
          >
            Profile
          </Link>
        </div>
        <div className="w-[95%] md:w-[80%]">{children}</div>
      </div>
    </>
  );
}
export default AdminLayout;
