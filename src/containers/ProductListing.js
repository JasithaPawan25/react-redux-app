import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import ProductComponent from './ProductComponent';
import { setProcuts } from '../redux/actions/productActions';

const ProductListing =()=> {

  const products =useSelector((state)=>state);
  const dispatch = useDispatch();

  const fetchProducts = async ()=>{
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err)=>{
        console.log("Err",err)
    });
    dispatch(setProcuts(response.data));
  };

  useEffect(()=>{
    fetchProducts();
  },[])

  console.log("products: ",products);


  return (
    <div className='ui grid container'>
       <br/><br/> <br/><br/><br/>
       <ProductComponent/>
        
        </div>

  )
}

export default ProductListing