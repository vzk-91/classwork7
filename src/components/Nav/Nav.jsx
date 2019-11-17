import React, {useState, useEffect} from 'react';
import Product from '../Product/Product'
import Card from '../Card/Card';
import './Nav.css'


const Nav = () => {
    const [data, setData] = useState([]);
    const [products, setProducts] = useState(true);
   

   const handleData = (item) =>{
       if(!data.includes(item))
      setData([...data,item])
   }

   const removeData = (item) =>{
       const newData = data.filter((selectedItem)=>{
           return selectedItem.id !== item.id
       });
       setData(newData)
   }  


    return(
        <div>
           <div className="nav">
           <button type="button" className="btn btn-primary" onClick={()=>{setProducts(true)}}>Products</button>
            <button type="button" className="btn btn-warning" onClick={()=>{setProducts(false)}}>Card</button>
           <div className="span"><span class="badge badge-pill badge-success">SelectedCard :{data.length}</span></div>
            
           </div>
            {products ? <Product handleData={handleData} / > : <Card removeData={removeData} data={data} />}
            
        </div>
        
    )
}

export default Nav;