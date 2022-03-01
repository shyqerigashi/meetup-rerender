import React from 'react';
import { useUIContext } from '../../context/UIContext/UIContext';

import './Footer.css';

export const Footer = () => {
  const { dateNow } = useUIContext();

  return (
    <div className="Footer">
      <p>
        Date: <b>{dateNow.toFormat('dd-MM-yyyy')}</b>
      </p>
      <p> | </p>
      <p>
        Time: <b>{dateNow.toFormat('HH:mm:ss')}</b>
      </p>
    </div>
  );
};
