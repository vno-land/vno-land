import React, { FC } from 'react';

interface VnoButtonProps {
  btnLink?: string,
  btnText?: string,
  btnClass?: string
}

const Button:FC<VnoButtonProps> = ({ 
  btnLink = '#', 
  btnText = 'Add button text',
  btnClass = 'primary'
  }) => {

  return (
    <a className={btnClass} href={btnLink}>
      {btnText}
      <style jsx>{`
        a {
          display: inline-block;
          padding: 1rem 2rem;
          text-transform: capitalize;
          border-radius: 5px;
          transition: all .200s ease-in-out;
        }

        .primary {
          background-color: #2f495e;
          color: #fff;
          border: solid 1px #2f495e;
        }

        .primary:hover {
          color: #2f495e;
          background-color: transparent;
          border: solid 1px #2f495e;
        }

        .secondary {
          background-color: #57d3af;
          color: #2f495e;
          border: solid 1px #57d3af;
        }

        .secondary:hover {
          color: #57d3af;
          background-color: transparent;
          border: solid 1px #57d3af;
        }

        .info {
          color: #2f495e;
          background-color: transparent;
        }

        .info:hover {
          font-weight: 600;
        }

        .info-primary {
          color: #2f495e;
          background-color: transparent;
          border: solid 1px #2f495e;
        }

        .info-primary:hover {
          background-color: #2f495e;
          color: #fff;
          border: solid 1px #2f495e;
        }

        .info-secondary {
          color: #57d3af;
          background-color: transparent;
          border: solid 1px #57d3af;
        }

        .info-secondary:hover {
          background-color: #57d3af;
          color: #2f495e;
          border: solid 1px #57d3af;
        }
      `}</style>
    </a>
  )
}

export default Button
