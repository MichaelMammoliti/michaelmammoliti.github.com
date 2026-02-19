import { useEffect } from "react";
import styles from "./FirstSlide.module.scss";

const assets = {
  profileImage: "/public/profile-image.jpg",
};

export const FirstSlide = () => {
  useEffect(() => {
    const range = [0, 500];

    let pos = 0;
    let ticking = false;
    let isInRange = false;

    function doSomething(scrollPos: number) {
      const rotation = scrollPos * 0.2;
      const el = document.querySelector(
        `#profile-section`,
      ) as HTMLElement | null;

      if (el) {
        el.style.transform = `translateY(-${rotation}px)`;
      }
    }

    window.addEventListener("scroll", () => {
      pos = window.scrollY;

      isInRange = pos > range[0] && pos < range[1];

      if (!isInRange) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          doSomething(pos);
          ticking = false;
        });

        ticking = true;
      }
    });
  }, []);

  return (
    <div className={styles.FirstSlideWrapper}>
      <div className={styles.FirstSlide} id="profile-section">
        <div className={styles.Background} />
        <div className={styles.BackgroundOverlay} />
        <div className={styles.Content}>
          <div className={styles.Center}>
            <img
              className={styles.ProfileImage}
              src={assets.profileImage}
              alt="A profile image of Michael Mammoliti"
            />

            <h1 className={styles.Title}>Michael Mammoliti</h1>
            <p className={styles.Subtitle}>Senior Full Stack Engineer</p>
            <p className={styles.Description}>
              With over a decade of experience in software development, I
              specialize in crafting scalable and efficient web applications. My
              expertise spans across various technologies, including React,
              Node.js, and cloud platforms. I am passionate about creating
              seamless user experiences and delivering high-quality code that
              drives business success.
            </p>

            {/* <div className={styles.Actions}>
            <a href="#portfolio">View Portfolio</a>
            <a href="#contact">Contact Me</a>
          </div> */}
          </div>
        </div>

        <div className={styles.ScrollIndicator}>
          <span className={styles.Arrow}>&#x2193;</span>
          <span className={styles.Text}>Scroll Down</span>
        </div>
      </div>
    </div>
  );
};
