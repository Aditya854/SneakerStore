import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';

function Singleshoe() {
  const { id } = useParams();
  const idx = Number(id);
  let shoeData = {};
  shoeData.sex="men";
  const getShoe = () => {
    data.map((item) => {
      if (item.id === idx) {
        shoeData=item;
        // console.log(shoeData);
        return;
      }
    });
  };
  getShoe();
  const {company,sex,price,description,name,isstock} = shoeData;
  return <div>
    <h1>{company}</h1>
    <h1>{sex}</h1>
    <h1>{price}</h1>
    <h1>{name}</h1>
    <h1>{description}</h1>
    <h1>{isstock}</h1>
  </div>;
}

export default Singleshoe;
