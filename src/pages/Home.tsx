import { HomeModal } from '../components/Home/HomeModal';
import { useUIContext } from '../context/UIContext/UIContext';

export const Home = () => {
  const { isModalOpen, toggleModal } = useUIContext();

  /* 
    HomeModal is still being rerendered, because a change in the context triggers a rerender in every subscribed component
    When a component rerenders, this also triggers a rerender of all of it's children. 
    This is why HomeModal rerenders, despite the fact that it's props are still the same. 
  */
  return (
    <div className="Home">
      <HomeModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};
