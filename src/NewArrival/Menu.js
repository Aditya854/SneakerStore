import React from 'react'

function Menu({shoes}) {
    return (
        <div className="item">
            {
                shoes.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <h3>{item.sex}</h3>
                            <h2>{item.company}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;