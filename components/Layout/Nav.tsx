import VnoLogo from './Utility/VnoLogo';
import Link from 'next/link';
import ActiveLink from './Utility/ActiveLink';
import { useRouter } from 'next/router'
import navStyles from '../../styles/Layout/Nav.module.css';

const Nav = () => {
  const router = useRouter()
  const activeLink = {
    
  }
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
            <ActiveLink href="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/docs/ssg/getting-started">Docs</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/team">Team</ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about">About</ActiveLink>
          </li>
          <li>
            <Link href="/learn/ssg/create-vno-app">
              Learn
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;
