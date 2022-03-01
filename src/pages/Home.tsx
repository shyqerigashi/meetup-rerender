import React from 'react';
import { HomeModal } from '../components/Home/HomeModal';
import { useUIContext } from '../context/UIContext/UIContext';

export const Home = () => {
  const { isModalOpen, toggleModal } = useUIContext();
  return (
    <div className="Home">
      <HomeModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};
