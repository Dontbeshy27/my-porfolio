import styles from './Project.module.css'
import vibber from '../../assets/viberr.png';

function Project() {
  return ( 
        <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectContainer}>
    <a href="https://github.com/Dontbeshy27/MINI-1-">
        <img className="hover" src={vibber} alt="" />
    </a> 
    </div>
     </section>
     );
}


export default Project