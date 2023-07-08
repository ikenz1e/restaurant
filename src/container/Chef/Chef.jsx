import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper__img-reverse'>
      <img src={images.chef} /> 
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's words" />
      <h1 className='headtext__cormorant'>What we Believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, consectetur  </p>
        </div>
        <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, exercitationem laboriosam. Earum inventore unde, laudantium mollitia dolorum consequuntur pariatur saepe officiis fugiat ullam maiores similique iusto fugit hic nobis tempore.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Lua</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
