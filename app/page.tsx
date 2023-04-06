import styles from "./page.module.scss";
import TaskController from "@/components/Task/TaskController";

export default function Home() {
  const taskList = [
    { name: "taskOne", finished: false },
    { name: "taskTwo", finished: false },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.navBar}></div>
      <div className={styles.taskContainer}>
        <TaskController taskList={taskList} />
      </div>
    </main>
  );
}
