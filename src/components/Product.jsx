import React,{useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Product = ({items}) => {

  const [noOElement, setnoOfElement] = useState(8);
  const loadMore = () => {
    setnoOfElement(noOElement + noOElement);
  }


  const slice = items.slice(0, noOElement);

  return (
    
    <>
 
      <div className="py-4 container">
      <h5 className="text py-3">All Restaurants</h5>
        <div className="row justify-content-center align-item-center">
          {slice.map((product) => {
            return (
              <>
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                  <div className="card p-0 overlow-hidden h-100 shadow" >
                 
                   
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      />
                    

                    <div className="card-body">
                    
                      <h5 className="card-title">{product.title}</h5>
                      <div className="star mb-2">
                        <i className={product.star1}></i>
                        <i className={product.star2}></i>
                        <i className={product.star3}></i>
                        <i className={product.star4}></i>
                        <i className={product.star5}></i>
                        </div>

                        <div className="card-text">
                      <p>{product.description}</p>
                      
                      
                      
                      <div className="circle">
                      <div className="circleOpen">
                      <i className={product.circleopen}></i>
                      </div>

                      <div className="circleClose">
                      <i className={product.circleclose}></i>
                      </div>

                      <p className="status">{product.opennow}</p>
                      </div>
                      
                      </div>
                    
                      <Link to={`/product/${product.id}`}

                        style={{
                        
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                      <button
                       className="btn btn-primary w-100 rounded-1"
                       >LEARN MORE</button>
                       </Link>
                    </div>
                  </div>
                </div>
                
              </>
            );
          })}
          <div>
           <button
            className="button btn btn-outline-primary rounded-1 "
            onClick={() => loadMore()}
        >
          Load More

        </button>
        </div>
        </div>
       
      </div>
      
      
    </>
    
  );
};

export default Product;

