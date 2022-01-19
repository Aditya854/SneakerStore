function Filters() {
    return (
     <>
            <h4 className="filter-o-heading">Search/Filters</h4>
             <ul>
                <li className="filter filter-cat-1">
                   <h4>Filter by Gender</h4>
                   <ul className="filt-ul">
                       <li className="filter-li-option">
                           <input type="radio" name = "ans" value="yes"/>
                           <label htmlFor="">All Genders</label>
                       </li>
                   </ul>
                   <ul className="filt-ul">
                       <li className="filter-li-option">
                           <input type="radio" name = "ans" value="no"/>
                           <label htmlFor="">Men</label>
                       </li>
                   </ul>
                   <ul className="filt-ul">
                       <li className="filter-li-option">
                           <input type="radio" name = "ans" value="maybe"/>
                           <label htmlFor="">Women</label>
                       </li>
                   </ul>

                </li>
            </ul>
     </>
    )
}

export default Filters
