import styles from "./page.module.scss";
import Task from "@/components/Task/Task";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navBar}></div>
      <div className={styles.taskContainer}>
        <div className={styles.subContainer}>
          <Task label="testOne" />
          <Task label="testTwo" />
          <Task label="testThree" />
          <Task label="testFour" />
        </div>
      </div>
    </main>
  );
}
