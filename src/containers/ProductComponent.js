import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

function ProductComponent() {
    const products =useSelector((state)=>state.allProducts.products);
    const renderList=products.map((product)=>{
        const {id,title,image,price,category}=product;
        return( <div>  <br/><br/><br/>
        <div className="four column wide" style={{width:'250px'}} key={id}>
            <Link to={`/products/${id}`} >
        <div className="ui link cards">
         <div className="card">
             <div className="image">
                <img src={image} style={{height:'250px'}} alt={title}/>
             </div>
             <div className="content">
                 <div className="header">{title}</div>
                 <div className="meta price">$ {price}</div>
                 <div className="meta">{category}</div>
             </div>
 
         </div>
        </div>

         </Link>
         </div> 

        

         </div>
         );

    })

  return (
   <>{renderList}</>
  )
}

export default ProductComponent