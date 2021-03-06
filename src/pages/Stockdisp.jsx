import banner from "../Resources/mens/Stockbanner1.jpeg"
import Filters from "./Filters"
import Singleitem from "./Singleitem"
import items from '../data';
import { useState } from "react";
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import Pagination from '@mui/material/Pagination';
import  Paginationn  from "./Paginationn";


const allGenders = ['all', ...new Set(items.map((item) => item.sex))];
const allCompanies = [...new Set(items.map((item) => item.company))];

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range)


function Stockdisp() {
    const [shoes, setShoes] = useState(items);
    const [genderbtn] = useState(allGenders);
    const [companybtn] = useState(allCompanies);
    const [price] = useState([1,20000])
    const [noOfPages, setnoOfPages] = useState(4);
    const itemsPerPage = 15;


    //Filter Function
    const paginntionlen =(filteredData) =>{
        const aux= Math.ceil(filteredData.length/itemsPerPage)
        setnoOfPages(aux);
    }
    const filterGender = (button) =>{

        if(button === 'all'){
        setShoes(items);
        paginntionlen(items);
        return;
        }

        const filteredData = items.filter(item => item.sex ===  button);
        setShoes(filteredData)
        paginntionlen(filteredData)
    }

    const filterCompany = (button) =>{
    
        const filteredData = items.filter(item => item.company ===  button);
        setShoes(filteredData)
        paginntionlen(filteredData)

  }

  const filterPrice = (pricee)=>{
      const filteredData = items.filter(item =>
        item.price<=pricee[1] && item.price >=pricee[0]);
        setShoes(filteredData)
        paginntionlen(filteredData)

  }




    return (
        <>
           <img className="mens-banner-1" src={banner} alt=""  style={{height: "70vh"}}/>
           
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
                           {/* <div className="sd-top-line">
                               <h3>This is display area</h3>
                           </div> */}
                           <div className="sd-column-3">
                                <ul className="product sd-column-3">

                                 
                                    <Paginationn shoes={shoes} noOfPages={noOfPages}/>
                                  

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
