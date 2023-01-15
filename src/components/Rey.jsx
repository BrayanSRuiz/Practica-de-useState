import styles from './css/Rey.module.css'

export const Rey = ( {rey, setTotal, total} ) => {
  const imageURL = `https://www.html6.es/img/rey_${rey.name}.png`

  const comprar = (e) => {
    setTotal(total + rey.precio)
    e.target.parentNode.remove()
  }
  return (
      <li className={styles.lista}>
            <div>{rey.nombre}</div>
            <img src={imageURL} alt={rey.nombre}/>
            <p>Precio: ${rey.precio}</p>
            <button onClick={comprar}>Comprar</button>  
          </li>
  )
}