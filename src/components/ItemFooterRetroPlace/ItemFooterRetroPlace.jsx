import React from 'react';
/* CSS */
import './FooterRetroPlace.css';

export const ItemFooterRetroPlace = () => {
  return (
    <div className='footerRetroPlace'>
      <a
        className='footerLink'
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/retroplacestore.appspot.com/o/assets%2Ficons%2Fface.png?alt=media&token=a82f59cc-9b0e-4d11-9bae-cfc621aef89d'
          alt="RetroPlace's Facebook Icon Link"
          className='iconFooterRetroPlace'
        />
      </a>
      <a
        className='footerLink'
        href='https://instagram.com'
        target='_blank'
        rel='noopener noreferrer'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/retroplacestore.appspot.com/o/assets%2Ficons%2Finsta.png?alt=media&token=b808d5df-738d-4223-aab0-a3182bb5785c'
          alt="RetroPlace's Instagram Icon Link"
          className='iconFooterRetroPlace'
        />
      </a>
      <a
        className='footerLink'
        href='https://web.whatsapp.com/'
        target='_blank'
        rel='noopener noreferrer'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/retroplacestore.appspot.com/o/assets%2Ficons%2Fwtsp.png?alt=media&token=38c22cd0-6fb2-41e6-b13c-32c9822f0101'
          alt="RetroPlace's Whatsapp Icon Link"
          className='iconFooterRetroPlace'
        />
      </a>
    </div>
  );
};
