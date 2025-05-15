import { Cycles } from '../cycles/Cycles';
import { DefaultInput } from '../defaultInput/DefaultInput';
import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.form} action=''>
      <div className={styles.formRow}>
        <DefaultInput 
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
        <button>Enviar</button>
      </div>
    </form>
  );
}