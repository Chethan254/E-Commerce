import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import './productItem.css';

export default function Product() {

    const {id} =useParams();
    const [product, setProduct]= useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }

    useEffect(()=>{ 
        const getProduct = async ()=>{
            setLoading(true);
            const response = await fetch (`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
           
        }
 
        getProduct(); 
    },[]);

const Loading = ()=>{
   return(
    <div>
    Loading...
</div>
   )
}
const ShowProduct =()=>{
   return(
    <div className='container'>
        <div className="productImage">
            <img src={product.image} alt={product.title}  className="img"/>
        </div>
        <div className="productDetails">
            <h4 className='productCategory'>{product.category}</h4>
            <h1 className="productTitle">{product.title}</h1>
            <p className="productRating">Rating{product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
            </p>
            <h3 className="productPrice">${product.price}</h3>
            <p className="productDesc">{product.description}</p>

        <div className="buttons">
            <button className='productAddCart' onClick={()=>addProduct(product)}>Add to Cart</button>
            <NavLink to="/cart" className="productCart">Go to Cart</NavLink></div>
        </div>
    </div>
   )
}

  return (
    <div>
          <div className="conatainer">
            <div className="productContainer">
                {
                    loading ? <Loading/>:<ShowProduct/>
                }
            </div>
          </div>
    </div>
  )
}
