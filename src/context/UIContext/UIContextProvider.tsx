import React, { useEffect, useState } from 'react';
import { UIContext, UIContextType } from './UIContext';
import { DateTime } from 'luxon';

interface UIContextProviderProps {
  children: React.ReactNode | null;
}

interface UIContextProviderState {
  dateNow: DateTime;
  isModalOpen: boolean;
}

export const UIContextProvider = (props: UIContextProviderProps) => {
  const [state, setState] = useState<UIContextProviderState>({
    isModalOpen: false,
    dateNow: DateTime.now(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setState({ ...state, dateNow: DateTime.now() });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleModal = () => {
    setState({ ...state, isModalOpen: !state.isModalOpen });
  };

  const context: UIContextType = {
    dateNow: state.dateNow,
    isModalOpen: state.isModalOpen,
    toggleModal,
  };

  return (
    <UIContext.Provider value={context}>{props.children}</UIContext.Provider>
  );
};
