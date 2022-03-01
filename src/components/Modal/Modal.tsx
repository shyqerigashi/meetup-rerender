import { ReactNode } from 'react';

import './Modal.css';

interface Props {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
  toggle: () => void;
}

export const Modal = (props: Props) => {
  return (
    <>
      {props.isOpen && (
        <div className="Modal">
          <div className="Modal__inner">
            <div className="Modal__header">
              <h3>Modal Title</h3>
              <span onClick={props.toggle}>X</span>
            </div>
            <div className="Modal__content">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
};
