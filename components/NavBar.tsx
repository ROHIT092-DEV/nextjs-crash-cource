import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <Link href="/" className="logo">
            <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
            <p>Dev Event</p>
          </Link>

          <ul>
            <Link href="/">Home</Link>
            <Link href={'/event'}>Events</Link>
            <Link href={'/'}>Create Event</Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
