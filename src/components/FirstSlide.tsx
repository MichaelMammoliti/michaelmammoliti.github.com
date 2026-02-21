import { useEffect } from "react";
import { Anchor } from "./Button";
import styles from "./FirstSlide.module.scss";

const assets = {
  profileImage: "/profile-image.jpg",
  curriculum: "/Michael Mammoliti - Senior Full Stack Engineer.pdf",
};

const Logo = () => (
  <svg
    className={styles.Logo}
    viewBox="0 0 81 68"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M68.2955 0.317486C68.8322 -0.0271395 69.5041 -0.097015 70.1031 0.136822C70.7419 0.386271 71.2088 0.945964 71.3394 1.61924L80.9644 51.2335C81.1213 52.0421 80.7659 52.8644 80.0699 53.3048C79.3735 53.7451 78.4784 53.7132 77.815 53.2247L55.9546 37.1271L42.7662 66.8126C42.4469 67.531 41.7359 67.9955 40.9498 68.0001C40.1635 68.0046 39.4471 67.5479 39.1197 66.8331L25.396 36.8692L3.18608 53.2247C2.52269 53.7132 1.62752 53.7451 0.931199 53.3048C0.235186 52.8644 -0.120195 52.0421 0.0366677 51.2335L9.66167 1.61924C9.79228 0.945963 10.2591 0.386271 10.898 0.136822C11.5368 -0.112584 12.2588 -0.016813 12.8111 0.389752L40.5005 20.7804L68.19 0.389752L68.2955 0.317486ZM41.6861 24.8741C40.9809 25.3932 40.0202 25.3932 39.315 24.8741L16.6607 8.19151L40.9097 61.1358L64.481 8.08702L41.6861 24.8741ZM4.93999 46.9659L23.6949 33.1544L12.4019 8.49913L4.93999 46.9659ZM57.6177 33.3849L76.0611 46.9659L68.6216 8.6212L57.6177 33.3849Z"></path>
  </svg>
);

const Socials = () => (
  <div className={styles.Socials}>
    <ul>
      <li>
        <Anchor
          icon="Curriculum"
          label="Curriculum"
          href={assets.curriculum}
          download
        />
      </li>
      <li>
        <Anchor
          icon="Github"
          href="https://www.github.com/michaelmammoliti"
          label="GitHub"
        />
      </li>
      <li>
        <Anchor
          icon="LinkedIn"
          href="https://www.linkedin.com/in/michaelmammoliti/"
          label="LinkedIn"
        />
      </li>
    </ul>
  </div>
);

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
          <div>
            <Logo />
          </div>

          {/* <div>
            <nav className={styles.Nav}>
              <ul>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div> */}

          <div>
            <img
              className={styles.ProfileImage}
              src={assets.profileImage}
              alt="A profile image of Michael Mammoliti"
            />

            <h2 className={styles.Title}>Michael Mammoliti</h2>
            <p className={styles.Subtitle}>Senior Full Stack Engineer</p>

            <i className={styles.Headline}>
              <span>15+ years, trusted by Tech Giants & Startups.</span>
              <strong>Let's shape the future, together.</strong>
            </i>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                justifyContent: "space-between",
              }}
            >
              <Anchor
                href="mailto:mammoliti.michael@gmail.com"
                data-variant="black"
              >
                GET IN TOUCH
              </Anchor>

              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
