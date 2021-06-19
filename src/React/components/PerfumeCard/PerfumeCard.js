import React from 'react';
import s from './PerfumeCard.scss'

const PerfumeCards = ( props ) => {
  const { img, name, vl, notas, variante} = props.perfumeData;

  let notasToRender = notas;

  if(typeof variante === "string") {
    notasToRender = <>
      <p>{notas}</p>
      <h4>ó tambien con:</h4>
      <p>{variante}</p>
    </>
  } else if (typeof notas === "object") {
    notasToRender = <>
      <ul>
        <li><strong>Principal:</strong> {notas.principal}</li>
        <li><strong>Corazón:</strong> {notas.corazon}</li>
        <li><strong>Fondo:</strong> {notas.fondo}</li>
      </ul>
    </>
  }

  return (
    <article className={s.PerfumeCard}>
    <div className={s.imgContainer}>
      <img src={img} loading="lazy" alt={name}></img>
      {/* <img src={img} height="100px" width="100px"></img> */}
    </div>
    <div className={s.cardContent}>
      <h1>{name}</h1>
      <h2>{vl} ml</h2>
      <h3>Notas arómaticas:</h3>
      {notasToRender}
    </div>
    </article>
  )
}

export default PerfumeCards;