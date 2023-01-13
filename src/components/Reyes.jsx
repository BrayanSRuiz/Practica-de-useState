import { Rey } from "./Rey"
import styles from './css/Reyes.module.css'

export const Reyes = ({ reyes, setTotal, total }) => {

  return (
    <div>
      <ul className={styles.container}>
        {reyes.map((rey) => 
          <Rey key={rey.name} rey={rey} setTotal={setTotal} total={total}/>
        )}
      </ul>
      
    </div>
  )
}