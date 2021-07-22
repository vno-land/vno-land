import Image from 'next/image';
import Button from './Layout/Utility/Button';

import vnoTemplateGraphic from '../public/vno-content-structure.svg';
import styles from '../styles/Layout/SSGSection.module.css';

const SSGSection = () => {
  return (
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <div className={styles.left}>
            <Image src={vnoTemplateGraphic} alt="Vno graphic"/>
          </div>

          <div className={styles.right}>
            <h1>Vno, now has the power of <span>Static Site Generation</span></h1>
            <div className={styles.btnsContainer}>
              <Button btnText="Get Started" btnLink="/learn/ssg/create-vno-app" btnClass="primary" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SSGSection