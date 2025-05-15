import type React from "react";
import styles from './DefaultInput.module.css'

type DefaultInputProps = {
  id: string;
  type: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input}  id={id} type={type} {...rest}/>
    </>
  );
}