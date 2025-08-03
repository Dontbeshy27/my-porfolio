import styles from './Project.module.css'
import vibber from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';

function Project() {
  return ( 
        <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Project ExperienceP</h1>
    <div className={styles.projectsContainer}>
    <ProjectCard src={vibber}/>
    </div>
     </section>
     );
}


export default Project