import React, { useCallback, useEffect, useState } from 'react';
import { UIContext, UIContextType } from './UIContext';
import { DateTime } from 'luxon';

interface UIContextProviderProps {
  children: React.ReactNode | null;
}

export const UIContextProvider = (props: UIContextProviderProps) => {
  const [dateNow, setDateNow] = useState<DateTime>(DateTime.now());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateNow(DateTime.now());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleModal = useCallback(() => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }, []);

  const context: UIContextType = {
    dateNow: dateNow,
    isModalOpen: isModalOpen,
    toggleModal,
  };

  return (
    <UIContext.Provider value={context}>{props.children}</UIContext.Provider>
  );
};
