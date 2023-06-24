import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/productActions';
import { State, mainproduct } from '../redux/types';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

function Product() {
   const product = useSelector((state:State) => state.productreducer.products as Product[])
   const [popup,setPopup] = useState(false)
   var signlepro = product && product.length > 0 && product[0];
   const dispatch = useDispatch();
    const param = useParams();
    const {id} = param;
    //console.log("signlepro ",signlepro)
    const filterproduct = signlepro && Array.isArray(signlepro) && signlepro.filter((x:any) => x.id == id);
    //console.log("filterproduct ",filterproduct && filterproduct[0])

     const stoppopup = () => {
      setTimeout(() => {
        setPopup(false)
      },2000)
     }
     const popupproduct = () => {
      setPopup(true)
      stoppopup()
     }

    const handleAddToCart = (e:any,product:any) => {
        e.preventDefault();
        console.log("product",product)
        dispatch(addToCart(product))
      popupproduct();
    }



  return (
    <div className='single_product'>
      {
        popup && (
          <div className='popup'>
            <p>Added to Cart</p>
          </div>
        )
      }
        {filterproduct && filterproduct.length >0  && filterproduct[0] && (
        <div className='single_product_wrapper'key={filterproduct[0].id} >
            <div className='single_product_left_section'>
                <img src={filterproduct[0].image} alt={filterproduct[0].title} />
            </div>
            <div className='single_product_right_section'>
                <h2 className='single_product_right_section_header'>{filterproduct[0].title}</h2>
                <p className='single_product_right_section_desc'>{filterproduct[0].description}</p>
                <span className='product_category'>{filterproduct[0].category}</span>
                <span className='product_price'>Price: ${filterproduct[0].price}</span>
                <span className='add_to_cart_button' onClick={(e) => handleAddToCart(e,filterproduct[0])}>Add to cart</span>
            </div>
        </div>
        )}
    </div>
  )
}

export default Product