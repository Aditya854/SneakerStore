// import Caraosuel from "../home/Caraousel"
import banner from "../Resources/mens/banners-guru-studio-01.jpg"
import img1 from "../Resources/mens/aj-2a.jpg"
import img2 from "../Resources/mens/sp-1.jpg"
import banner2 from "../Resources/mens/banner-2.jpg"
import img3 from "../Resources/mens/custom-1.png"

function Men() {
return (
    <div>
            <img  className="mens-banner-1" src={banner} alt="" />

               {/* <div className="m-container"> */}
                  <div className='mens-row-1'>
                    <div className='m-column-1'>
                        <div className="m-card-content">
                            <h2>New Release of Air Jordan-1</h2>
                            <h4>Step into comfort with the Air Jordan 1 Zoom Air Comfort. Refined to make one of history's most iconic sneakers more wearable</h4>
                            <p>Check out the latest Nike's Air jordans</p>
                            <button>checkout</button>
                        </div>
                    </div>

                    <div className='m-column-1'>
                        <img className="m-img" src={img1} alt="" />
                    </div>
                </div>
              {/* </div> */}

              <div className='mens-row-1'>
                    <div className='m-column-1'>
                        <img className="m-img" src={img2} alt="" />
                    </div>

                    <div className='m-column-1'>
                        <div className="m-card-content">
                            <h2>New Release of Air Jordan-1</h2>
                            <h4>Step into comfort with the Air Jordan 1 Zoom Air Comfort. Refined to make one of history's most iconic sneakers more wearable</h4>
                            <p>Check out the latest Nike's Air jordans</p>
                            <button>checkout</button>
                        </div>
                    </div>
                </div>
{/*  */}
                 <div id="bannr-2">
                    <div className="m-banner-2">
                        <img  className="mens-banner-2" src={banner2} alt="" />
                        <a className="m-btn">Shop Now </a>
                    </div>
                </div>
{/*  */}

                <div className='mens-row-1'>
                        <div className='m-column left'>
                            <div className="m-card-content">
                                <h2>New Release of Air Jordan-1</h2>
                                <h4>Step into comfort with the Air Jordan 1 Zoom Air Comfort. Refined to make one of history's most iconic sneakers more wearable</h4>
                                <p>Check out the latest Nike's Air jordans</p>
                                <button>checkout</button>
                            </div>
                        </div>

                        <div className='m-column right'>
                            <img className="m-img" src={img3} alt="" />
                        </div>
                </div>

    </div>

    )
}

export default Men
