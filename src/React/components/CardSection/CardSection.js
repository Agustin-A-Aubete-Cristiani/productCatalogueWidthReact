import React from 'react';
import s from './_CardSection.scss'

const MainSection = (props) => {
  const { children, titleSection, message } = props;
  let sctructureMessage;
  if( message !== undefined ) {
    const messagePropsArray = Object.keys(message)
    sctructureMessage = messagePropsArray.map(( element, idx ) => <p key={idx}>{message[element]}</p>)
  }
  
  return (
    <main className={s.main}>
      { message ? <div className={s.sectionMessage}>{sctructureMessage}</div> : false }
      <h1 className={s.titleSection}>{titleSection}</h1>
      <section className={s.CardSection}>
        {children}
      </section>
    </main>
  )
}

export default MainSection;