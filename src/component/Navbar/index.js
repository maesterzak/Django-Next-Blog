import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="h-24 w-full sticky px-5 py-5 z-10 bg-[#FFF6EF] top-0 flex justify-between align-middle">
      <div>
        <span className="text-6xl site-name">
          <Link href={"/"}>Quno</Link>
        </span>
      </div>
      <div></div>
      <div className="gap-1" style={{ display: "flex", alignItems: "center" }}>
        {/* <div className="flex bg-slate-500 h-[100%] align-middle justify-center">
          <svg
            className="w-7 h-7"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          > */}
        {/* <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path> */}
        {/* </svg>
        </div> */}
        <Link href={"/dashboard/admin"} className="relative w-10 h-10">
          <Image
            width={700}
            height={700}
            sizes={"100vw"}
            style={{
              width: "100%",
              height: "100%",
            }}
            className="mt-2 w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
            src="/img/1.jpg"
            alt="Bordered avatar"
          />
        </Link>
      </div>
    </nav>
  );
}
