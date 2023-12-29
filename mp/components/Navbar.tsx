import Link from 'next/link';
import "/Users/davidraphael/Documents/CS127/CS127MP/mp/app/css/Navbar/styles.css"; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <img src="https://cdn.discordapp.com/attachments/775346740122484750/1190136677210005524/image.png?ex=65a0b427&is=658e3f27&hm=c7e133280dbe77345c075324008c379963bd31eb7e1d647ec392fec7125650d9&" alt="Your Brand Logo" className="navbar-logo" />
      </Link>
      <ul className="navbar-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/rooms">Rooms</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
