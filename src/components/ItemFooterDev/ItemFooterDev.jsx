import React from 'react';
/* CSS */
import './FooterDev.css';

export const ItemFooterDev = () => {
  return (
    <div className='footerDeveloper'>
      
      <a
        className='developerLink'
        href='https://emanuelescudero.ar'
        target='_blank'
        rel='noopener noreferrer'>
        • Desarrollado por Emanuel Escudero •
      </a>
      <img
        className='logoDev'
        src='https://i.ibb.co/ZT13Snc/Logo2023.png'
        alt='Logo del Desarrollador'
      />
    </div>
  );
};
