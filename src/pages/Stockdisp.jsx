import banner from "../Resources/mens/Stockbanner.png"
import Filters from "./Filters"
import Singleitem from "./Singleitem"
import items from '../data';
import { useState } from "react";

const allGenders = ['all', ...new Set(items.map((item) => item.sex))];
const allCompanies = [...new Set(items.map((item) => item.company))];


function Stockdisp() {
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
        <>
           <img className="mens-banner-1" src={banner} alt=""  style={{height: "65vh"}}/>
           
           <div className="stockdiv">
               <div className="sd-col-full">
                  <div className="sd-filter-area">
                            <h3>this is filter area</h3>
                                <div className="sd-filter-arear2">
                                    <Filters companybtn={companybtn} genderbtn={genderbtn} filterGender={filterGender} filterCompany={filterCompany} />
                                </div>
                  </div>


                   <div className="sd-content-area">
                       <main className="sd-site-main">
                           <div className="sd-top-line">
                               <h3>This is display area</h3>
                           </div>
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
