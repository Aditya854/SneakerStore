import React from 'react'
import { useGlobalContext } from '../context'

const NewArrivals = () => {
    const {shoes} = useGlobalContext();
    console.log(shoes);
    return (
     <div>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla voluptatum nihil doloremque deserunt neque expedita molestias quasi dicta ad! Minus repellat dignissimos, aspernatur provident excepturi itaque at? Explicabo rerum vitae accusamus qui reiciendis animi? Cum ratione ab suscipit iste dolore? Commodi esse doloremque, corrupti consectetur at saepe delectus totam sit explicabo, modi alias magnam eos tenetur repellat exercitationem, vero voluptate ducimus provident qui natus velit dolores quod eum. Illo harum suscipit provident atque tenetur, perferendis nam voluptates asperiores reiciendis quidem ratione. Accusantium dolor eum officiis veritatis deserunt impedit qui? Vitae veritatis expedita quis commodi quo amet dolorum velit obcaecati repellat.</p>

         <div>
            {shoes.map(shoe => {
                const {id,company,sex} = shoe;
                return (
                    <div>
                        <h3>{id}</h3>
                        <h3>{company}</h3>
                        <h3>{sex}</h3>
                    </div>
                );
            })}
         </div>
     </div>   
    )
}

export default NewArrivals
