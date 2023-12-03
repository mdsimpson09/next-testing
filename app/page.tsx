import Link from "next/link";
import Signup from "./components/Signup";

export default function Home() {
  return (
    <main> 
      <h1>Hello</h1>
      <div>
      <Link href="/">About Gamer Date</Link>
      </div>
      <div>
      <Link href="/about">About Gamer Date</Link>
      </div>
    <div>
      <Link href="/users">User Info</Link>
   </div>
    
    
    </main>
  )
}
