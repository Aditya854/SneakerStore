import { React, useState } from 'react';
import FiltersNewArrival from '../NewArrival/Button';
import items from '../data';
import Menu from '../NewArrival/Menu';

const allGenders = ['all', ...new Set(items.map((item) => item.sex))];
const allCompanies = [...new Set(items.map((item) => item.company))];

const NewArrivals = () => {
  const [shoes, setShoes] = useState(items);
  const [genderbtn, setGenderbtn] = useState(allGenders);
  const [companybtn, setCompanybtn] = useState(allCompanies);

  //Filter Function
  const filterGender = (button) =>{

    if(button === 'all'){
      setShoes(items);
      return;
    }

    const filteredData = items.filter(item => item.sex ===  button);
    setShoes(filteredData)
  }
  const filterCompany = (button) =>{

    const filteredData = items.filter(item => item.company ===  button);
    setShoes(filteredData)
  }
  return (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        voluptatum nihil doloremque deserunt neque expedita molestias quasi
        dicta ad! Minus repellat dignissimos, aspernatur provident excepturi
        itaque at? Explicabo rerum vitae accusamus qui reiciendis animi? Cum
        ratione ab suscipit iste dolore? Commodi esse doloremque, corrupti
        consectetur at saepe delectus totam sit explicabo, modi alias magnam eos
        tenetur repellat exercitationem, vero voluptate ducimus provident qui
        natus velit dolores quod eum. Illo harum suscipit provident atque
        tenetur, perferendis nam voluptates asperiores reiciendis quidem
        ratione. Accusantium dolor eum officiis veritatis deserunt impedit qui?
        Vitae veritatis expedita quis commodi quo amet dolorum velit obcaecati{' '}
      </p>
      <div>
        <FiltersNewArrival companybtn={companybtn} genderbtn={genderbtn} filterGender={filterGender} filterCompany={filterCompany} />
        <Menu shoes={shoes}/>
      </div>
    </div>
  );
};

export default NewArrivals;
