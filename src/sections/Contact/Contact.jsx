import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className={styles.info}>
        <p className={styles.name}>Eduardo M. Pacheco JR</p>
        
        {/* Email Link */}
        <a className={styles.email} href="mailto:eduardopachecojr913@gmail.com">
          eduardopachecojr913@gmail.com
        </a>

        {/* Phone Number Link */}
        <a className={styles.number} href="tel:+639102068802">
          09102068802
        </a>
      </div>
    </section>
  );
}

export default Contact;