"use client"
import { FcReadingEbook } from "react-icons/fc";
import { Button } from "./ui/button";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between items-center gap-1 p-2 md:px-24 lg:px-36 ">
      <div className="text-[26px] md:text-[32px] flex items-center font-semibold cursor-pointer"
        onClick={() => router.push('/')}
      ><FcReadingEbook />
        <p>Book<span className="text-red-500">Byte</span></p>
      </div>
      <Button onClick={() => router.push('/all')} size={"sm"}>View All Books</Button>
    </nav >
  )
}

export default Navbar