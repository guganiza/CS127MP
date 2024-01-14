import Link from 'next/link';
import '../app/css/Navbar/styles.css';

function Navbar() {
  return (
    <nav className="navbar1">
      <ul className="navbar1-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/rooms">Rooms</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;