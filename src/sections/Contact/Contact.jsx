import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.info}>
        <p className={styles.name}>Eduardo M. Pacheco JR</p>
        <a className={styles.email} href="mailto:eduardopachecojr913@gmail.com">
          eduardopachecojr913@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
