import styles from "./Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.container}>
      <img src="/cat_logo.svg" className={styles.logo} />
    </div>
  );
};
