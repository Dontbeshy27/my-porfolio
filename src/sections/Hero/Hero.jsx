import styles from './Hero.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkinIcon from '../../assets/linkedin-light.svg';
import { Button } from 'bootstrap';
import CV from '../../assets/cv.pdf';

function Hero() {
return (
  <section id="hero"className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img
      className={styles.hero}
      src={heroImg}
      alt="profile of ivero"
      />
      <img 
      className={styles.colormode}
      src={themeIcon}
      alt="Color mode icon"
      />
    </div>
    <div className={styles.info}>
      <h1>
        Eduardo 
        <br>
        </br>
        Pacheco
      </h1>
      <h2>
        Front end Web-Developer
      </h2>
      <span>
      <a href="https//twitter.com/" target="_blank"></a>
      <img src={twitterIcon} alt="Twitter icon" />
    
      <a href="https//github.com/" target="_blank"></a>
      <img src={githubIcon} alt="Github icon" />
     
      <a href="https//linkin.com/" target="_blank"></a>
      <img src={linkinIcon} alt="TLinkin icon" />
      </span>
      <p> With passion for developing modern React Web apps for commecial business</p>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </div>
  </section>
);
}

export default Hero;
