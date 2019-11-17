import React, {useState, useEffect} from 'react';
import ProductItem from './ProductItem';


const Product = ({handleData}) => {
    const Url = "https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/item"
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        fetch(Url)
        .then((response) =>{
            return response.json()
        })
        .then((data) =>{
                setData(data)
                setLoading(false)
        })
    }, [])
  
  

    return(
   <div className="prod">
      {loading  &&    <div className="spinner-border text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                   </div>}
      {
          data.map((item)=>{
              return <ProductItem handleData={handleData} key={item.id} item={item} />
          })
      }
   </div>
    )
}

export default Product;