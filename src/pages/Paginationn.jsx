import Pagination from '@mui/material/Pagination';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Singleitem from './Singleitem';




function Paginationn({shoes, noOfPages}) {
 
    // const [item,setitem] = useState([]);
    const [pagee,setPage] = useState(1);
    const itemsPerPage = 15;
    // const [noOfPages] = useState(Math.ceil(shoes.length/itemsPerPage)
    // );
    
    const handleChange = (event, value) => {
        setPage(value);
      };

     console.log(pagee,itemsPerPage)

    return (
        <div className='paggin-div-1'>

         <Singleitem shoes={shoes} pagee={pagee} itemsPerPage={itemsPerPage}/>

       
       
           <Pagination 
            count={noOfPages}
            page={pagee}
            onChange={handleChange}
            defaultPage={1}
            size="large"
            showFirstButton
            showLastButton
            // classes={{ ul: classes.paginator }}
            />



            
           
            
            
        </div>
    )
}

export default Paginationn