import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button/Button';
import { Cycles } from '../cycles/Cycles';
import { Input } from '../input/Input';
import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.form} action=''>
      <div className={styles.formRow}>
        <Input
            id='myInput' 
            labelText='task' 
            type='text' 
            placeholder='Digite algo'/>
      </div>

      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.formRow}>
       <Cycles/>
      </div>

      <div className={styles.formRow}>
        <Button icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}