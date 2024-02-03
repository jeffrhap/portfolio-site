import { useProgress } from "@react-three/drei";

import styles from "./LoadingScreen.module.scss";
import { useEffect } from "react";

const LoadingScreen = ({ loading, onLoadingComplete, onAnimComplete }: any) => {
  const { progress } = useProgress();

  useEffect(() => {
    console.log(progress)
    if (progress >= 100) {
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }
  }, [progress]);

  return (
    <div className={`${styles.loadingscreen} ${loading ? "" : styles.inactive}`} onAnimationEnd={() => onAnimComplete()}>
      <div className={styles.bottom}>
        <img src="/images/loader.svg" alt="" className={styles.loader} />
      </div>
    </div>
  );
};

export default LoadingScreen;
