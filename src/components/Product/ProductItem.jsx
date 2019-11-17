import React,{useState} from "react";
import './product.css'

const ProductItem = ({item , handleData}) => {
     const [selectItem, setSelectItem] = useState(false);

     const showSelect = ()=>{
         setSelectItem(true)
     }

    return(
            <div class="card hoverable">
                    <div class="card-header">
                    {item.name}
                    {selectItem &&  <span class="badge  badge-success">&#10004;</span>}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"> $:{item.price}</h5>
                        <button  class="btn btn-primary" onClick={()=>{handleData(item); showSelect()}} >Add to Card</button>
                    </div>
            </div>
    )
}

export default ProductItem;

