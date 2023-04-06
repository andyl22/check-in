import styles from "./TaskController.module.scss";
import Task from "./Task";

interface Props {
  taskList: {
    name: string;
    finished: boolean;
  }[];
}

export default function TaskController(props: Props) {
  const { taskList } = props;

  const mappedTasks = taskList.map((task) => (
    <Task label={task.name} key={task.name} />
  ));

  return <div className={styles.subContainer}>{mappedTasks}</div>;
}
