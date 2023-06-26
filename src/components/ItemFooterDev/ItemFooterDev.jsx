import React from 'react';
/* CSS */
import './FooterDev.css';

export const ItemFooterDev = () => {
  return (
    <div className='footerDeveloper'>
      <p> • Desarrollado por Emanuel Escudero •</p>
      <a
        className='developerLink'
        href='https://emanuelescudero.ar'
        target='_blank'
        rel='noopener noreferrer'>
        <img
        className='logoDev'
        src='https://i.ibb.co/ZT13Snc/Logo2023.png'
        alt='Logo del Desarrollador'
      />
      </a>
      
    </div>
  );
};
