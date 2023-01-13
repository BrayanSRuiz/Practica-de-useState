import { useState } from 'react'
import styles from './App.module.css'
import { Reyes } from './components/Reyes'


function App() {
  const reyes=[
    {
      name: "atanagildo",
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      name: "ervigio",
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      name: "ataúlfo",
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      name: "leogivildo",
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      name: "recesvinto",
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      name: "sisebuto",
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]

  const [total, setTotal] = useState(0)

  return (
    <div className={styles.caja}>
      <div>
        <h2>Total a pagar: ${total}</h2>
        <button onClick={()=>setTotal(0)}>Vaciar</button>
      </div>
      <Reyes reyes={reyes} setTotal={setTotal} total={total}/>
    </div>
  )
}

export default App
