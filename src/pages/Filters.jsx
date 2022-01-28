import React, { Fragment } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function Filters({
  companybtn,
  genderbtn,
  price,
  filterPrice,
  filterGender,
  filterCompany,
}) {
  const [pricee, setPrice] = useState([1, 20000]);

  const handleChange = (pricee) => {
    // setPrice({pricee});
    // console.log(pricee)
    filterPrice(pricee);
  };

  return (
    <>
      <ul className="filt-override">
        <li className="filter filter-cat-1">
          <h4>Filter by Categories</h4>
          <div className="filt-buttons">
            {genderbtn.map((sex, i) => {
              return (
                <ul className="filt-ul">
                  <li className="filter-li-option">
                    <input
                      type="radio"
                      name="ans"
                      value="yes"
                      onClick={() => filterGender(sex)}
                    />
                    <label htmlFor="">{sex}</label>
                  </li>
                </ul>
              );
            })}
          </div>

          <h4 className="filt-div">Filter by Company</h4>
          <div className="filt-buttons">
            {companybtn.map((company, i) => {
              return (
                <ul className="filt-ul">
                  <li className="filter-li-option">
                    <input
                      type="radio"
                      name="ans"
                      value="yes"
                      onClick={() => filterCompany(company)}
                    />
                    <label htmlFor="">{company}</label>
                  </li>
                </ul>
              );
            })}
          </div>

          <h4 className="filt-div">Filter by Price</h4>
          <Fragment>
            <div className="filt-buttons-slider">
              {/* {pricee[0]} - {pricee[1]}  */}
              <Range
                marks={{
                  1: `$1`,
                  20000: `$20000`,
                }}
                min={1}
                max={20000}
                defaultValue={[1, 5000]}
                tipFormatter={(value) => `$${value}`}
                tipProps={{
                  placement: "top",
                  visible: true,
                }}
                //  value={pricee}
                onChange={setPrice}
                onAfterChange={handleChange}
              />
            </div>
          </Fragment>
        </li>
      </ul>
    </>
  );
}

export default Filters;
