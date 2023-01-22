import ContactForm from './contact-form';
import Form from './contact-form';
import styles from './contact.module.sass';

const Contact = () => {
  return (
    <section id="contact" className={styles.sectionContact}>
      <div className={styles.content}>
        <h3 className={styles.title}>Contact us</h3>
        <p className={styles.text}>Do you have any kind of help please contact with us.</p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
