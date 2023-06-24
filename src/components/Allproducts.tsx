import React, { useState,useCallback, useEffect } from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux';
import { setproducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

interface State {
    productreducer: {
        products:Product[]
    },
    _persist: any
}

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
  }

function Allproducts() {
    const products = useSelector((state:State) => state.productreducer.products as Product[])
   
     const dispatch = useDispatch()
    //console.log("productsall ",products[0])
    let mainproduct = products && products[0];
    const getAllProduct = async() => {
      const res = await axios.get('https://fakestoreapi.com/products')
      dispatch(setproducts(res.data))
    }

    const AlldataCallback = useCallback(() => {
        getAllProduct()
    },[])
    useEffect(() => {
       AlldataCallback()
    },[])
  return (
    <div className='products_wrapper'>
        <div className='products_container'>
           { Array.isArray(mainproduct) &&
            mainproduct && mainproduct.map((product:Product,id:number) => (
                <Link to={`/${product?.id}`} key={id}>
                <div className='allproduct_container'>
                    <div>
                    <div className='productimage'><img src={`${product?.image}`} alt={`${product?.title}`} /></div>
                    <div className='product_price'><p>${product?.price}</p></div>
                    <span className='product_title'>{product?.title}</span>
                    </div>
                </div>
                </Link>
            ))
           }
        </div>
    </div>
  )
}

export default Allproducts