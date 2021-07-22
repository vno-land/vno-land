import { FC } from 'react';
import { useRouter } from 'next/router'

interface ActiveLinkProps {
  href: any
}

const ActiveLink:FC<ActiveLinkProps> = ({ children, href }) => {
  const router = useRouter()

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick}>
      <style jsx>{`
        a {
          font-size: 1.1rem;
          color: ${router.asPath === href ? '#57D3AF' : '#ffffff'};
          transition: all .200s ease-in-out;
          font-family: 'Quicksand', arial, sans-serif; 
        }

        a:hover {
          color: #57D3AF;
        }
      `}</style>
      {children}
    </a>
  )
}

export default ActiveLink