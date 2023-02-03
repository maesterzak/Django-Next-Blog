import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar(){

    return(
        
        

      
<nav className='h-24 w-full sticky px-5 py-5 z-10 bg-[#FFF6EF] top-0 flex justify-between align-middle'>
  <div >
    
      <span className='text-6xl site-name'><Link href={'#'}>Quno</Link></span>
    
  </div>
  <div>

  </div>
  <div style={{display:'flex', alignItems:'center'}} >
  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>

  </div>


</nav>



        
    )
}