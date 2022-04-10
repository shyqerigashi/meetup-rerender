import React from 'react';
import { Modal } from '../Modal/Modal';

interface IHomeModal {
  isModalOpen: boolean;
  toggleModal: () => void;
}

/*
  Memoizing the component means that React will remember value of props of the component.
  Upon next rerender, it will compare the value of the current props to the value of the remembered props in the previous rerender.
  If the props are the same, it will skip the rerender. This means that the rerender function will not be ran, which in turn means that no child rerenders will be ran either.
  In this case this doesn't work though, because toggleModal has a different reference on each rerender, and React by default compares props by references (you can define a custom comparison function though).
  This means that the previous props never equal current props, so component is rerendered each time, making memo useless.  
*/
export const HomeModal = React.memo((props: IHomeModal) => {
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
});
