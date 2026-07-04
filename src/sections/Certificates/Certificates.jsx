import styles from './Certifcates.module.css';

const certificates = [
  {
    title: 'Full-stack Web Development Certificate',
    issuer: 'KODEGO',
    date: 'September 2024',
    link: null, // Keep null if no link
  },
  {
    title: 'EF Standard English Test Certificate',
    issuer: 'EF SET',
    date: 'Aug 2025 - Current',
    link: 'https://cert.efset.org/en/sfQew6',
  },
];

function Certificates() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.list}>
        {certificates.map((cert) => (
          <div key={cert.title} className={styles.card}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p className={styles.date}>{cert.date}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;