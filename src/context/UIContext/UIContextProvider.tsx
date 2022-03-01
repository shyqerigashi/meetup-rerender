import React, { useEffect, useRef, useState } from 'react';
import { UIContext, UIContextType } from './UIContext';
import { DateTime } from 'luxon';

interface UIContextProviderProps {
  children: React.ReactNode | null;
}

export const UIContextProvider = (props: UIContextProviderProps) => {
  const dateNow = useRef<DateTime>(DateTime.now());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      dateNow.current = DateTime.now();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const context: UIContextType = {
    dateNow: dateNow.current,
    isModalOpen: isModalOpen,
    toggleModal,
  };

  return (
    <UIContext.Provider value={context}>{props.children}</UIContext.Provider>
  );
};
