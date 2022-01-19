import banner from "../Resources/mens/Stockbanner.png"
import Filters from "./Filters"
import Singleitem from "./Singleitem"


function stockdisp() {
    return (
        <>
           <img className="mens-banner-1" src={banner} alt=""  style={{height: "65vh"}}/>
           
           <div className="stockdiv">
               <div className="sd-col-full">
                  <div className="sd-filter-area">
                            <h3>this is filter area</h3>
                                <div className="sd-filter-arear2">
                                    <Filters/>
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
                                    <Singleitem/>
                                    <Singleitem/>
                                    <Singleitem/>
                                    <Singleitem/>
                                    
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

export default stockdisp
