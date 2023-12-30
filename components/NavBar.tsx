import Link from "next/link"
import { Button } from './ui/button'

const NavBar = () => {
  return (
    <nav className="fixed p-3 flex items-center justify-between bg-[#07447b] w-screen h-16 text-white font-semibold">
        <Link href='/' className="text-2xl w-fit hover:border-b-2">Habib's Blog</Link>
        <div className="flex space-x-4">
        <Button className="bg-fuchsia-950">Login</Button>
        <Button className="bg-fuchsia-950">Sign Up</Button>
        </div>
        
    </nav>
  )
}

export default NavBar