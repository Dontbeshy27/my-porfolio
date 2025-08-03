import styles from './Project.module.css'
import freshBurger from '../../assets/fresh-Burger.png';
import dropbox from '../../assets/dropbox.png'
import pubgmIcon from '../../assets/pubgmIcon.jpg'
import bookingIcon from '../../assets/bookingIcon.jpg'
import logoIcon from '../../assets/logoIcon.jpg'
import evaluationIcon from '../../assets/evaluationIcon.jpg'
import ProjectCard from '../../common/ProjectCard'; 

function Project() {
  return ( 
        <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Project Experience</h1>
    <div className={styles.projectsContainer}>
    <ProjectCard 
    src={dropbox}
    link="https://github.com/Dontbeshy27/MINI-1-"
    h3="Mini Project 1"
    p="This is Clone of Dropbox"
    />


    <ProjectCard 
    src={bookingIcon}
    link="https://github.com/Dontbeshy27/VNV-RESORT-BOOKING"
    h3="Mini Project 2"
    p="This VNV-RESORT-BOOKING-WEBSITE"
    />

    <ProjectCard 
    src={pubgmIcon}
    link="https://github.com/Dontbeshy27/Final_Capstone_Vite"
    h3="THESIS IN KODEGO"
    p="PUBGM WEBSITE USING LARAVEL FOR BACKEND AND REACT FOR FRONTEND"
    />

    <ProjectCard 
    src={logoIcon}
    link="https://github.com/Dontbeshy27/BSIT-CAPSTONE"
    p="Advance Monitoring system of Zamodca tsmpc"
    />

    <ProjectCard 
    src={evaluationIcon}
    link="https://github.com/Dontbeshy27/Faculty-Evaluation-System"
    h3="Faculty Evaluation System"
    p="For PRMSU-CASTILLEJOs using PHP framerwork"
    />

    </div>
     </section>
     );
}



export default Project