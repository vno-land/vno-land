import React, { FC } from 'react';

interface VnoLogoProps {
  logoWidth: number,
  logoColor: string
}

const VnoLogo:FC<VnoLogoProps> = ({ logoWidth, logoColor }) => {
  return (
    <div>
      <svg width={logoWidth} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 526.9 175.5"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_1-2-2" data-name="Layer 1-2"><path d="M109.7,170.2h-45L2.9,7.1H46.6L87.1,128.8l41-121.7h43.1Z" style={{fill:`${logoColor}`}}/><path d="M334.5,170.2H292.7V74.9c0-9.5-2.9-32.3-30.4-32.3-18.7,0-31.7,14-31.7,32.3,0,10.7,15.8,17,36.1,9.4,1.7-.6,3.5-1.8,7.6-3.8,2.5-1.3-9.6,6-9.6,6.3,5.3,48.7-10.7,83.4-10.7,83.4H188.8V7.1h39.9V23c10.5-12.4,24.7-20,42.1-20,38.3,0,63.7,28.8,63.7,71.9v95.3Z" style={{fill:`${logoColor}`}}/><path d="M524,88.8c0,48.8-37.1,85.2-82.4,85.2s-82-36.4-82-85.2S396.3,3,441.6,3,524,40,524,88.8Zm-42.2.3c0-28.2-18.1-47.8-40.2-47.8S401.4,61,401.4,89.1c0,27.6,18.1,46.6,40.2,46.6S481.8,116.7,481.8,89.1Z" style={{fill:`${logoColor}`}}/><circle cx="238" cy="61" r="3" style={{fill:`${logoColor}`}}/><circle cx="254.7" cy="61" r="3" transform="translate(153.69 302.64) rotate(-80.78)" style={{fill:`${logoColor}`}}/></g></g></g></g></svg>
    </div>
  )
}

export default VnoLogo
