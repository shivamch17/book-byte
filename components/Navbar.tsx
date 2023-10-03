import { FcReadingEbook } from "react-icons/fc";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="w-full md:px-36 px-2">
        <nav className="flex justify-between items-center gap-1">
            <div className="md:text-[36px] flex items-center font-semibold "><FcReadingEbook/>
                <p>Book<span className="text-red-500">Byte</span></p>
            </div>
            <Button>How to use</Button>
        </nav>
    </header>
  )
}

export default Navbar