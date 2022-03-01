import { DateTime } from 'luxon';
import React, { useContext } from 'react';

export interface UIContextType {
  dateNow: DateTime;
  isModalOpen: boolean;
  toggleModal: () => void;
}

const UIContextValues: UIContextType = {
  dateNow: DateTime.now(),
  isModalOpen: false,
  toggleModal: () => {},
};

export const UIContext = React.createContext<UIContextType>(UIContextValues);

export const useUIContext = () => useContext(UIContext);
