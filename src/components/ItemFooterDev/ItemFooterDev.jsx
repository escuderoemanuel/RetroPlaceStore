import React from 'react';
/* CSS */
import './FooterDev.css';

export const ItemFooterDev = () => {
  return (
    <div className='footerDeveloper'>
      <p className='rightsFooter'>© 2023 | All Rights Reserved</p>
      <a
        className='developerLink'
        href='https://escuderoemanuel.github.io/Portfolio/'
        target='_blank'
        rel='noopener noreferrer'>
        • Created by Emanuel Escudero •
      </a>
    </div>
  );
};
