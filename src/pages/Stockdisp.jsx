import banner from "../Resources/mens/Stockbanner1.jpeg"
import Filters from "./Filters"
import Singleitem from "./Singleitem"
import items from '../data';
import { useState } from "react";
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';

const allGenders = ['all', ...new Set(items.map((item) => item.sex))];
const allCompanies = [...new Set(items.map((item) => item.company))];

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)


function Stockdisp() {
    const [shoes, setShoes] = useState(items);
    const [genderbtn, setGenderbtn] = useState(allGenders);
    const [companybtn, setCompanybtn] = useState(allCompanies);
    const [price, setPrice] = useState([1,20000])

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

  const filterPrice = (pricee)=>{
      const filteredData = items.filter(item =>
        item.price<=pricee[1] && item.price >=pricee[0]);
        setShoes(filteredData)
  }




    return (
        <>
           <img className="mens-banner-1" src={banner} alt=""  style={{height: "55vh", objectFit: "cover", objectPosition: "center"}}/>
           
           <div className="stockdiv">
               <div className="sd-col-full">
                  <div className="sd-filter-area">
                            {/* <h3>this is filter area</h3> */}
                                <div className="sd-filter-arear2">
                                    <Filters companybtn={companybtn} genderbtn={genderbtn} price={price}
                                    filterPrice={filterPrice} filterGender={filterGender} filterCompany={filterCompany} />
                                </div>
                  </div>


                   <div className="sd-content-area">
                       <main className="sd-site-main">
                           <div className="sd-column-3">
                                <ul className="product sd-column-3">

                                    {/* can map over here */}
                                    <Singleitem shoes={shoes}/>
                                    {/* mapping ends */}

                                </ul>
                           </div>
                       </main>
                   </div>

                   
               </div>
            </div>

            
        </>
    )
}

export default Stockdisp
