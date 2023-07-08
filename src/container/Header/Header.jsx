import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper__info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa magni ipsum quos eligendi repellat, molestias officia temporibus. Illo consectetur facilis </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper-img'>
      <img src={images.welcome} />
    </div>
  </div>
);

export default Header;
