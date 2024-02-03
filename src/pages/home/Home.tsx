import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./Home.module.scss";

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n]);

  return (
    <>
      <div className={`page ${styles.home}`}>
        <div className="full-width">
        
        </div>
      </div>
    </>
  );
}
