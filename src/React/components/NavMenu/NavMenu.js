import React from 'react';
import s from './_NavMenuMovil.scss'
import SNotMovil from './_NavMenuNotMovil.scss'

import { SECTIONS_TO_RENDER } from '../App'

const NavMenu = (props) => { 
  const { landing, comments, YVDorgeval, imported, frenchCapitalPremium: fcp } = SECTIONS_TO_RENDER;
  const { YVFemale, YVMale, YVUnisex } = YVDorgeval;
  const { IFemale, IMale } = imported;
  const {FCPFemale, FCPMale } = fcp;
  
  const { handleChangeSectionToRender: changeSection, handleClickNavBtns, isNavMovil } = props;
  const { isNavInViewport } = props;
  
  const navClassNameMovil = isNavInViewport
  ? s.NavMenuMovil + " " + s.NavInViewPort
  : s.NavMenuMovil

  const handleClick = ( sectionToChange ) => {
    changeSection(sectionToChange);
    handleClickNavBtns();
  }
  
  return (
    <nav className={isNavMovil ? navClassNameMovil : SNotMovil.NavMenuNotMovil}>
      <ul className={isNavMovil ? s.principalOptions : SNotMovil.principalOptions}>

        <li>
          <button onClick={() => handleClick(landing)}>Inicio</button>
        </li>
        
        <li>
          <button className={s.notNavBtn}>Productos</button>
          <ul>
            <li>
              <button className={s.notNavBtn}>Yves D'orgeval</button>
              <ul>
              
                <li>
                  <button onClick={() => handleClick(YVFemale)}>Femeninos</button>
                </li>
                <li>
                  <button onClick={() => handleClick(YVMale)}>Masculinos</button>
                </li>
                <li>
                  <button onClick={() => handleClick(YVUnisex)}>Unisex</button>
                </li>

              </ul>
            </li>
            <li>
              <button className={s.notNavBtn}>Importados</button>
              <ul>

                <li>
                  <button onClick={() => handleClick(IFemale)}>Femenino</button>
                </li>
                <li>
                  <button onClick={() => handleClick(IMale)}>Masculino</button>
                </li>
                
              </ul>
            </li>
            <li>
              <button className={s.notNavBtn}>French Capital Premium</button>
              <ul>

                <li>
                  <button onClick={() => handleClick(FCPFemale)}>Femenino</button>
                </li>
                <li>
                  <button onClick={() => handleClick(FCPMale)}>Masculino</button>
                </li>
                
              </ul>
            </li>
          </ul>

        </li>
        <li>
          <button onClick={() => handleClick(comments)}>Comentarios</button>
        </li>
        
      </ul>
    </nav>
  )
}

// ** EXPORTS
export default NavMenu;