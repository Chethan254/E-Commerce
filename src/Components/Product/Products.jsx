
import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import './products.css'

export default function Products() {
  
 

    const [data, setData] =useState([]);
    const [filter, setFilter]= useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted= true;

    useEffect(()=>{

      const getProducts =async ()=>{
        setLoading(true);
        const response =await fetch("https://fakestoreapi.com/products");
        if (componentMounted){
          setData(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
        }
        return()=>{
          componentMounted=false;
        }
      }


      getProducts();
    },[]);

      const Loading =()=>{
        return(
          <div className='loading'>
            <Skeleton className='skeleton'/>
            <Skeleton className='skeleton'/>
            <Skeleton className='skeleton'/>
            <Skeleton className='skeleton'/>
            <Skeleton className='skeleton'/> 
  
          </div>
        )
      }

      const filterProduct =(cat)=>{
        const updatedList = data.filter((x)=>x.category===cat);
        setFilter(updatedList)
      }

      const ShowProduct =()=>{
        return(
        <>
          <div className="productItem">
          <button className="productNames" onClick={()=>setFilter(data)}>All</button>
          <button className="productNames" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="productNames" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="productNames" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="productNames" onClick={()=>filterProduct("electronics")}>Electronics</button>

        </div>


        <div className="cards">

        {filter.map((p)=>{
          return(
                  <div className="card" key={p.id}>
                  <h2 className="cardCategory">{p.category} </h2>
                  <img src={p.image} alt="" className='cardImage' />
                  <h1 className="cardTitle">{p.title.substring(0, 12)} </h1>
                  <h4 className="cardPrice">${p.price}</h4>
                  <NavLink to={`/products/${p.id}`} className='buyNow'>Buy Now</NavLink>
              </div> 
            
          )
        })}
        </div>
        </>
        
        )


      }


  return (
    <div className='productContainer'>
        <div className="latestProduct">
            <h1 className="latest">Latest Products</h1>
            <hr />
        </div>


        <div className="cardLoading">
          {loading ? <Loading/> : <ShowProduct/>}
        </div>

    </div>
  )
}
