import type React from "react";
import styles from './Input.module.css'

type InputProps = {
  id: string;
  type: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function Input({ id, type, labelText, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input}  id={id} type={type} {...rest}/>
    </>
  );
}