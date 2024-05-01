import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import "react-toastify/dist/ReactToastify.css";



const ProductDetail = ({ cart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((prodcut) => prodcut.id == id);
    //  console.log(filterProduct)
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (suman) => suman.category === product.category
    );

    // console.log("RelatedProduct = ",relatedProducts)
    setRelatedProducts(relatedProducts);
  }, [id, product.category]);

  
  return (
    <>
      
     
      <div className="app">
        {
         
            <div className="details" key={product._id}>
           
            <a href="/"> <i class="fa-solid fa-angle-left fa-2xl bttn"></i></a>
            
              <div className="big-img">
                <img src={product.imgSrc} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{product.title}</h2>
                  <div className="star mb-2">
                        <i className={product.star1}></i>
                        <i className={product.star2}></i>
                        <i className={product.star3}></i>
                        <i className={product.star4}></i>
                        <i className={product.star5}></i>
                        </div>

                  <span>${product.price}</span>
                </div>
            

                <p>{product.description}</p>
                <p>{product.isi}</p>

           
               
              </div>
            </div>
          
        }
        
      </div>
      <h1 className="related text-center">Related Products</h1>
      <Product  items={relatedProducts} />
     
     
    </>
  );
};


export default ProductDetail;
