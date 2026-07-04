import styles from './ExperienceCard.module.css';

function ExperienceCard({ title, company, startDate, endDate, description }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.company}>{company}</p>
      <p className={styles.dates}>
        {startDate} – {endDate}
      </p>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default ExperienceCard;
