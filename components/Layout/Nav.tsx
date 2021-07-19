import VnoLogo from './VnoLogo';
import Link from 'next/link';
import navStyles from '../../styles/Layout/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navContainer}>
        <div className={navStyles.brand}>
          <Link href="/">
            <a><VnoLogo logoWidth={150} logoColor="#57d3af" /></a>
          </Link>
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/learn">
              Learn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;
