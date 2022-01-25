import img from '../Resources/mens/aj-3.jpg';
import { Link } from 'react-router-dom';

function Singleitem({ shoes }) {
  return (
    <>
      <div className='item'>
        {shoes.map((item) => {
          return (
            <div className='si-col-1'>
              <Link
                to={`shoe/${item.id}`}
              >
                <div className='card'>
                  <img src={item.images[0]} className='card-img-top' alt='' />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-text'>$ {item.price}</p>
                    <p className='card-text'>{item.company}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Singleitem;
