import { FcReadingEbook } from "react-icons/fc";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-1 p-2 md:px-24 lg:px-36 ">
      <div className="text-[26px] md:text-[32px] flex items-center font-semibold "><FcReadingEbook />
        <p>Book<span className="text-red-500">Byte</span></p>
      </div>
      <Button size={"sm"}>How to use</Button>
    </nav>
  )
}

export default Navbar