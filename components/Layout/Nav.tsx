import { useEffect } from 'react';
import VnoLogo from './Utility/VnoLogo';
import Link from 'next/link';
import ActiveLink from './Utility/ActiveLink';

const Nav = () => {
  useEffect(() => {
    const nav = document.querySelector('#navBar');

    const scrollHandler = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        nav?.classList.add('navShadow');
      } else {
        nav?.classList.remove('navShadow');
      }
    }

    window.onscroll = function() {scrollHandler()};
  }, []);

  return (
    <nav id="navBar" className="nav">
      <style jsx>{`
        .nav {
          position: fixed;
          width: 100vw;
          height: 85px;
          padding: 1rem;
          background: var(--primary-color);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Quicksand', arial, sans-serif;
          font-size: 1rem;
          transition: all 300ms ease-in-out;
          z-index: 50;
        }

        .navShadow {
          box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 25px 2px, rgba(0, 0, 0, 0.04) 0px 10px 10px 2px;
        }

        .navContainer {
          width: 1080px;
          display: flex;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .nav ul {
          padding: 0;
          width: 35%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          list-style: none;
        }

        .nav ul li:last-child a {
          padding: .6rem 1.2rem;
          font-size: 1.1rem;
          color: var(--primary-color);
          background-color: var(--secondary-color);
          border-radius: 5px;
          transition: all .200s ease-in-out;
        }

        .nav ul li:last-child a:hover {
          background-color: white;
          color: var(--primary-color);
        }
      `}</style>
      <div className="navContainer">
        <div className="brand">
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
            <a href="/learn/ssg/create-vno-app">
              Learn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Nav;