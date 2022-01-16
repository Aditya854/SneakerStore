import React from 'react'

function Button({companybtn,genderbtn, filterGender,filterCompany}) {
    return (
        <div className="button-container">
            <div className="buttons">
                {
                    genderbtn.map((sex, i)=>{
                        return <button type="button" className='btn btn-outline-primary' onClick={()=> filterGender(sex)}>{sex}</button>
                    })
                }
            </div>
            <div className="buttons">
                {
                    companybtn.map((company, i)=>{
                        return <button type="button" className='btn btn-outline-primary' onClick={()=> filterCompany(company)}>{company}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Button;
