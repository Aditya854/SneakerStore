import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';

function Singleshoe() {
  const { id } = useParams();
  const idx = Number(id);
  let shoeData = {};
  shoeData.sex = 'men';
  const getShoe = () => {
    data.map((item) => {
      if (item.id === idx) {
        shoeData = item;
        return;
      }
    });
  };
  getShoe();
  const { company, sex, price, description, name, isstock, images } = shoeData;

  const [mainImg, setMainImg] = useState(images[0]);
  const [activeImg,setActiveImg] = useState(0);
  console.log(mainImg);
  const changeImage = (image,index) => {
    setMainImg(image);
    setActiveImg(index);
    console.log(activeImg+1);
    console.log(index);
  };
  return (<>
    <div className="nav-patti"></div>
    <div className='main-shoe-div'>
      <div className='shoe-details'>
        <h5>{company}</h5>
        <h1>{name}</h1>
        <p className='shoe-desc'>{description}</p>
        <p>Rs.{price}</p>
        <button className='btn btn-outline-dark'>Shop Now</button>
      </div>
      <div className='shoe-images'>
        <img src={mainImg} className='main-shoe-image' />
        <div className='small-shoe-images-div'>
          {images.map((image,index) => {
            return (
              <button className={'btn small-shoe-images-coll mx-2 mb-5 '} key={index} onClick={() => changeImage(image,index)}>
                <img className='small-shoe-image' src={image} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}

export default Singleshoe;
