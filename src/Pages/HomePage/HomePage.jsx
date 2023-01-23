import css from './HomePage.module.css';
import image from '../../components/assets/Jedi.jpg';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Let the contacts be with you, always!</h1>
      <img src={image} alt="cool jedi" />
    </div>
  );
};

export default HomePage;
