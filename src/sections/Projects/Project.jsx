import styles from './Project.module.css'
import vibber from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-Burger.png';
import hipsster from '../../assets/hipsster.png';
import ProjectCard from '../../common/ProjectCard'; 

function Project() {
  return ( 
        <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Project Experience</h1>
    <div className={styles.projectsContainer}>
    <ProjectCard 
    src={vibber}
    link="https://github.com/Dontbeshy27/MINI-1-"
    h3="Mini Project 1"
    p="This is Clone of Dropbox"
    />


    <ProjectCard 
    src={freshBurger}
    link="https://github.com/Dontbeshy27/MINI-1-"
    h3="Mini Project 2"
    p="This VNV-RESORT-BOOKING-WEBSITE"
    />

    <ProjectCard 
    src={hipsster}
    link="https://github.com/Dontbeshy27/MINI-1-"
    h3="THESIS IN KODEGO"
    p="PUBGM WEBSITE USING LARAVEL FOR BACKEND AND REACT FOR FRONTEND"
    />


    </div>
     </section>
     );
}


export default Project