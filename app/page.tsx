import styles from "./page.module.scss";
import Task from "@/components/Task/Task";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navBar}>counter</div>
      <div className={styles.taskContainer}>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </main>
  );
}
