import styles from "./Task.module.scss";

export default function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p>Task</p>
    </div>
  );
}
