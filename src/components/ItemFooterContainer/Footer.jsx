import React from 'react';
import { ItemFooterDev } from '../ItemFooterDev/ItemFooterDev';
import { ItemFooterRetroPlace } from '../ItemFooterRetroPlace/ItemFooterRetroPlace';

/* CSS */
import './Footer.css';

export const ItemFooterContainer = React.memo(() => {
  return (
    <div className='footer'>
      <ItemFooterRetroPlace />
      <ItemFooterDev />
    </div>
  );
});
