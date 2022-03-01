import React from 'react';
import { Modal } from '../Modal/Modal';

interface IHomeModal {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export const HomeModal = (props: IHomeModal) => {
  console.log('HomeModal render');
  return (
    <div className="HomeModal">
      <button onClick={props.toggleModal}>Open Modal</button>
      <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fuga
          voluptates eaque dolores quam placeat, tempore rem, optio nostrum
          deserunt consequuntur dicta? Similique, necessitatibus dolor dolorem,
          aspernatur iure cupiditate unde eaque ea enim, consequatur deleniti
          repudiandae cumque! Corrupti sint vitae tenetur consectetur, a
          mollitia quisquam molestias id nisi libero blanditiis?
        </p>
      </Modal>
    </div>
  );
};
