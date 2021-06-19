import React from "react";
import s from './UpBtn.scss'

import iconUpBtn from '../../../img/icon/upBtn2.png'

const UpBtn = () => {

  const windowToUp = () => {
    window.scrollTo(0,0)
  };

  return (
    <div className={s.UpBtn}>
      <img src={iconUpBtn} onClick={windowToUp} className={s.imgIcon}/>
    </div>
  )
}

// ** EXPORTS
export default UpBtn;