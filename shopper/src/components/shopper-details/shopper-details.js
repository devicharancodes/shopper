import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function ShopperDetails(){
    const params = useParams();
    const [products, setProducts]=useState({rating:{rate:"",count:0}});
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`).then(responce => setProducts(responce.data))
    }
    ,[params.id])

    return(
        <div className="container-fluid">
            <h2 className="m-2 p-2">{products.title}</h2>
            <div className="row m-3 p-3">
                <div className="col-6">
                    <img src={products.image} alt="" style={{width:"300px", height:"300px"}} />
                </div>
                <div className="col-6">
                    <dl>
                        <dt>Title</dt>
                        <dd>{products.title}</dd>
                        <dt>Description</dt>
                        <dd>{products.description}</dd>
                        <dt><span className="bi bi-cash"></span>Price</dt>
                        <dd>${products.price}</dd>
                        <dt><span className="bi bi-star-fill" style={{color:"gold"}}></span>Rating</dt>
                        <dd>{products.rating.rate} [{products.rating.count}]</dd>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default ShopperDetails