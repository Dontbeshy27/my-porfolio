import styles from './Hero.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg'
import linkinLight from '../../assets/linkedin-light.svg';
import linkinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme} = useTheme ();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkinIcon = theme === 'light' ? linkinLight : linkinDark;

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
      onClick={toggleTheme}
      />
    </div>
    <div className={styles.info}>
      <h1>
        Eduardo M.
        <br>
        </br>
        Pacheco JR.
      </h1>
      <h2>
        Full-Stack Web Developer
      </h2>
      <span>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/Dontbeshy27" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/eduardo-pacheco-jr-b61800296/" target="_blank" rel="noopener noreferrer">
          <img src={linkinIcon} alt="LinkedIn icon" />
        </a>
      </span>
      <p>Certified Fullstack Web Developer with a strong background in data
         systems and technical operations. Combining proficiency in React, PHP,
         and Database Management with practical experience in high-volume data
         encoding and administrative workflows. A dedicated problem-solver who
         leverages both technical coding skills and real-world data management
         experience to build efficient, user-centric digital tools.</p>
      <a href={CV} download>
        <button className="hover">Resume</button>
      </a>
    </div>
  </section>
);
}

export default Hero;
