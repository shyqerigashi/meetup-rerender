import React, { useMemo } from 'react';
import { HomeModal } from '../components/Home/HomeModal';
import { useUIContext } from '../context/UIContext/UIContext';

export const Home = () => {
  const { isModalOpen, toggleModal } = useUIContext();
  const HomeModalComponent = useMemo(
    () => <HomeModal isModalOpen={isModalOpen} toggleModal={toggleModal} />,
    [isModalOpen] // eslint-disable-line react-hooks/exhaustive-deps
  );
  return <div className="Home">{HomeModalComponent}</div>;
};
