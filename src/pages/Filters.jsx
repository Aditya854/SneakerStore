import React from "react"


function Filters({companybtn,genderbtn, filterGender,filterCompany}) {
    return (
     <>
            <h4 className="filter-o-heading">Search/Filters</h4>
             <ul>
                <li className="filter filter-cat-1">
                   <h4>Filter by Categories</h4>
                   <div className="filt-buttons">
                       {
                           genderbtn.map((sex,i)=>{
                               return  <ul className="filt-ul">
                                 <li className="filter-li-option">
                                   <input type="radio" name = "ans" value="yes"
                                   onClick={()=> filterGender(sex)} />
                                   <label htmlFor="">{sex}</label>
                                 </li>
                               </ul>
                           })
                       
                       } 
                   </div>

                   <h4 className="filt-div">Filter by Company</h4>
                   <div className="filt-buttons">
                       {
                           companybtn.map((company,i)=>{
                               return  <ul className="filt-ul">
                                 <li className="filter-li-option">
                                   <input type="radio" name = "ans" value="yes"
                                   onClick={()=> filterCompany(company)} />
                                   <label htmlFor="">{company}</label>
                                 </li>
                               </ul>
                           })
                       
                       } 
                   </div>



                 

                </li>
            </ul>
     </>
    )
}

export default Filters
