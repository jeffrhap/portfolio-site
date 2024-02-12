import { useProgress } from "@react-three/drei";

import styles from "./LoadingScreen.module.scss";
import { useEffect } from "react";

const LoadingScreen = ({ loading, onLoadingComplete, onAnimComplete }: any) => {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
  }, [progress]);

  return (
    <div
      className={`${styles.loadingscreen} ${loading ? "" : styles.inactive}`}
      onAnimationEnd={() => onAnimComplete()}
    >
      <h1 className={styles.title}>Loading...</h1>
      <div className={styles.bottom}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
