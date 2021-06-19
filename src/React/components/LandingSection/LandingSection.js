import React from 'react';
import s from './_LandingSection.scss'

// ** IMAGES
import logo from '../../../img/logo/Logo.webp'
import infoG1 from '../../../img/Infografia/envios-texto.png'
import infoG2 from '../../../img/Infografia/envios-camion.png'

const LandingSection = () => {
  return (
    <div className={s.LandingSection}>

      <div className={s.banner}>
        <img src={logo}/>
      </div>

      <section className={s.content}>
        <p>Los perfumes <em>Yves D'orgeval</em> están hechos con las esencias originales importadas, son de excelente calidad y duración, registrados y aprobados por <strong>ANMAT</strong>.</p>
        <p>Yves D'orgeval elabora perfumes nacionales, con esencias y licencias de las fragancias Internacionales, las cuales son muy fieles a las originales que podes ver en cualquier perfumería. Con aceites vegetales naturales por eso son tan perdurables!!.</p>
        <p><strong>YVES D' ORGEVAL ES UNA MARCA FRANCESA Y CUMPLE CON TODAS LAS NORMAS Y ESTÁNDARES DE CALIDAD</strong>.</p>
        <p> También cuenta con la línea importada Made in France línea Premium, los mismos vienen cerrados con celofán y estampilla de <strong>AFIP</strong>.</p>
      </section>

      <div className={s.infografia}>
          <img src={infoG1} alt=""/>
          <img src={infoG2} alt=""/>
      </div>

    </div>
  )
}

// ** ESPORTS
export default LandingSection;