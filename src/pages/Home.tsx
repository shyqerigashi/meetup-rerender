import React from 'react';
import { Modal } from '../components/Modal/Modal';
import { useUIContext } from '../context/UIContext/UIContext';

export const Home = () => {
  const { isModalOpen, toggleModal } = useUIContext();
  return (
    <div className="Home">
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
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
