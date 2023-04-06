"use client";
import styles from "./Task.module.scss";
import { formatToKebabCase, formatTitle } from "@/utilities/StringFormat";
import { useRef } from "react";

interface Props {
  label: string;
}

export default function Task(props: Props) {
  const { label } = props;
  const checkboxRef = useRef<HTMLInputElement>(null);

  const toggleCheck = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  };

  return (
    <div className={styles.task}>
      <div className={styles.customCheckbox} onClick={toggleCheck}>
        <input
          type="checkbox"
          id={formatToKebabCase(label)}
          ref={checkboxRef}
        />
        <label htmlFor={formatToKebabCase(label)}>{formatTitle(label)}</label>
      </div>
    </div>
  );
}
