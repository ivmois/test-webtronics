import styles from './gallery.module.sass';

const Gallery = () => {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <h3 className={styles.title}>Gallery</h3>
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <p className={styles.leftText}>
            By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on
            coding exercises and projects.
          </p>
          <img className={styles.leftImg} src="img/gallery/developer4.jpg" />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightImages}>
            <div className={styles.wrapBigPhoto}>
              <img className={styles.bigPhoto} src="img/gallery/developer1.jpg" />
            </div>

            <div className={styles.wrapSmallsPhoto}>
              <img className={styles.smallPhoto} src="img/gallery/developer2.jpg" />
              <img className={styles.smallPhoto} src="img/gallery/developer3.jpg" />
            </div>
          </div>
          <p className={styles.rightText}>
            If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS,
            JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We
            will begin with the very basics of HTML and build a simple web page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
