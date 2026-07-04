import styles from './WorkExperience.module.css';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    title: 'Encoder',
    company: 'Leah D. Sarvida, LCB — Customs Brokerage',
    startDate: 'June 2025',
    endDate: 'June 2026',
    description:
      'Encoded shipping information for incoming client\'s oil shipments at Ma\'am Leah D. Sarvida\'s customs brokerage office.',
  },
  {
    title: 'On-the-Job Training',
    company: 'PRMSU-Castillejos Campus — Property and Supply Management Office',
    startDate: 'Jan 2025',
    endDate: 'May 2025',
    description:
      'Created a full system for the campus, handled multiple customers, fixed modems and cables, and assisted the head IT.',
  },
];

function WorkExperience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Work Experience</h1>
      <div className={styles.list}>
        {experiences.map((job) => (
          <ExperienceCard
            key={`${job.company}-${job.startDate}`}
            title={job.title}
            company={job.company}
            startDate={job.startDate}
            endDate={job.endDate}
            description={job.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
