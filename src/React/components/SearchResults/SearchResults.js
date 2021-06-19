import React from "react";
import s from './SearchResults.scss';

const SearchResults = (props) => {
  const { onClickCloseBtn } = props;
  return (
    <div className={s.SearchResults}>
      {/* {<button className={s.closeBtn} onClick={onClickCloseBtn}>X</button>} */}
      {props.children}
    </div>
  )
}

// ** EXPORTS
export default SearchResults;