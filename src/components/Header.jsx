import styles from './Header.module.scss'

export const Header = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Links</a>
        </li>
      </ul>

      <div className="menu">
        <a className="menu__link">Link 1</a>
        <a className="menu__link">Link 2</a>
        <a className="menu__link">Link 3</a>
      </div>

      <div className={styles['mod']}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed tempore quis corrupti illum aliquam ex doloribus nam eos unde hic ducimus temporibus consequatur veritatis atque, voluptatibus voluptates voluptatum earum?
        Rem odio assumenda nobis nostrum quaerat, quis reiciendis, nemo ad quae dicta dolore harum eos quam quidem voluptate commodi repellendus delectus dolores vitae tempora praesentium ab? Illum, id? Modi, tempora.'</p>
      </div>
    </>
  );
};
