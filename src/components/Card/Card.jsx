import React from 'react';


const Card = ({removeData, data}) => {
    return(
<div>
    {
      data.map((item)=>{
       return  (
        <div class="card">
        <div class="card-header">
        {item.name}
        </div>
        <div class="card-body">
            <h5 class="card-title"> $ : {item.price}</h5>
            <button  class="btn btn-danger" onClick={()=>{removeData(item)}} >Remove</button>
        </div>
</div>
       )
      })
    }
</div>
    )
}

export default Card;