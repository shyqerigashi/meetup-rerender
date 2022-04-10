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

  /*
    The callback is memoized, which means that the same reference will be returned each time.
    This means that when React will compare this function to the function passed in the previous rerender, they will be equal (referential equality will pass).
  */
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
