import React, {useState} from 'react';
import s from './_Header.scss'

import NavMenuMovil from "../NavMenu/NavMenu.js";

const Header = (props) => {
  const [isNavInViewport, setIsNavInViewport] = useState(false);
  const [windowW, setWindowW] = useState(window.innerWidth);
  
  window.addEventListener('resize', () => {
    const windowWidht = window.innerWidth;
    setWindowW(windowWidht)
    setIsNavInViewport(false);
  });

  const handleClickToggleNav = () => {
    setIsNavInViewport(!isNavInViewport);
  }
  
  const navBtn = <button 
                    className={s.navBtn} 
                    onClick={handleClickToggleNav}
                    >{isNavInViewport ? "X" : "☰"}
                  </button>
  
  const { handleChangeSectionToRender: changeSection, sectionToRender: section } = props;
    return (
      <header className={s.header}>
        <div className={s.header__container}>

          {windowW < 600 ? navBtn : false}
          { <NavMenuMovil 
                handleChangeSectionToRender={changeSection} 
                handleClickNavBtns={handleClickToggleNav}
                isNavInViewport={isNavInViewport}
                sectionToRender={section}
                isNavMovil={ windowW < 600 }
            />
          }
          {props.children}
        </div>
      </header>
    )
}
// ** EXPORTS 
export default Header;