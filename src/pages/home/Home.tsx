import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Home.module.scss";
import { IconGithub, IconLinkedIn } from "../../assets/images";

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  return (
    <>
      <div className={`page ${styles.home}`}>
        <div className={`full-width ${styles.container}`}>
          <div className={styles.topbar}>
            <h1 className={styles.title}>Jeffrey Happel</h1>
            <div className={styles.socials}>
              <a href="https://github.com/jeffrhap" target="_blank" rel="noopener noreferrer" className="icon github">
                <img src={IconGithub} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/jeffrey-happel-31714125/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
                <img src={IconLinkedIn} alt="" />
              </a>
            </div>
          </div>
          <div className={styles["title-holder"]}>
            <p className="italic">COMING</p>
            <p className="heading">SOON</p>
          </div>
        </div>
      </div>
    </>
  );
}
