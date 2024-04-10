import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


export function ShopperCategory()
{
    const params = useParams();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
       axios.get(`https://fakestoreapi.com/products/category/${params.catname}`).then(response =>{
        setProducts(response.data);
        console.log(response.data);
       })
    },[params.catname]);
    
    return(
        <div className='container-fluid'>
            <div className='d-flex flex-wrap'>
                {
                     products.map(product =>
                    
                            <div className='card m-2 p-2 ' style={{width:'300px'}}>
                                <img src={product.image}  alt =" " height='200px' className='card-img-top'/>
                                <div className='card-header'><p>{product.title}</p></div>
                                <div className='card-footer'><Link to={`/details/${product.id} `} className='btn btn-primary w-100'>Details</Link></div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}