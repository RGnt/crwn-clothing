import styles from './categoryitem.module.css';

export function Categoryitem({ id, title }) {
  return (
    <div key={id} className='category-container flex flex-auto flex-basis-[auto] min-w-[30%] h-[240px]'>
      <div className='background-image' />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
        {/* <img /> */}
      </div>
    </div>
  );
}

export default Categoryitem;
