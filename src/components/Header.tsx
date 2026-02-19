import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const portfolio = document.querySelector("#portfolio");

    if (!portfolio) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "-1px 0px 0px 0px",
      },
    );

    observer.observe(portfolio);

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.Header} data-theme={theme} ref={headerRef}>
      <nav className={styles.Nav}>
        <div className={styles.Logo}>
          <svg
            width="81"
            height="68"
            viewBox="0 0 81 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M68.2955 0.317486C68.8322 -0.0271395 69.5041 -0.097015 70.1031 0.136822C70.7419 0.386271 71.2088 0.945964 71.3394 1.61924L80.9644 51.2335C81.1213 52.0421 80.7659 52.8644 80.0699 53.3048C79.3735 53.7451 78.4784 53.7132 77.815 53.2247L55.9546 37.1271L42.7662 66.8126C42.4469 67.531 41.7359 67.9955 40.9498 68.0001C40.1635 68.0046 39.4471 67.5479 39.1197 66.8331L25.396 36.8692L3.18608 53.2247C2.52269 53.7132 1.62752 53.7451 0.931199 53.3048C0.235186 52.8644 -0.120195 52.0421 0.0366677 51.2335L9.66167 1.61924C9.79228 0.945963 10.2591 0.386271 10.898 0.136822C11.5368 -0.112584 12.2588 -0.016813 12.8111 0.389752L40.5005 20.7804L68.19 0.389752L68.2955 0.317486ZM41.6861 24.8741C40.9809 25.3932 40.0202 25.3932 39.315 24.8741L16.6607 8.19151L40.9097 61.1358L64.481 8.08702L41.6861 24.8741ZM4.93999 46.9659L23.6949 33.1544L12.4019 8.49913L4.93999 46.9659ZM57.6177 33.3849L76.0611 46.9659L68.6216 8.6212L57.6177 33.3849Z"></path>
          </svg>
        </div>
      </nav>

      <a
        href="mailto:mammoliti.michael@gmail.com"
        className={styles.ChatButton}
      >
        Let's Chat
      </a>
    </header>
  );
};
