import { useEffect, useState } from "react"

import AdminMenu from "../../components/layout/AdminMenu"
import Layout from "../../components/layout/Layout"

import { toast } from "react-toastify"
import axios from "axios"
import { Link } from "react-router-dom"


const Products = () => {
    const [products,setProducts]=useState([])
   const getAllProducts=async()=>{
    try {
        const {data}= await axios.get("http://localhost:8080/api/v1/product/get-product")
        
        if(data?.success){
          setProducts(data.product)
          console.log("dataa",data)
        }
       } catch (error) {
        toast.error("error")
       
        
       }

    }
    useEffect(()=>{
      getAllProducts()
    },[])
  
  return (<>
    <Layout>

    <div className='grid grid-cols-3 h-[100%] w-[95%] bg-gradient-to-br from-green-50 to-gray-200 '>
   <AdminMenu/>
<div className='  text-center grid col-span-2 place-content-center text-6xl text-green-900 '> 
<h1 className="text-[4rem]  shadow-xl font-bold text-gray-700">Products List</h1>
<div className="grid grid-cols-3 gap-2">
{products?.map((p)=>(


<>
<Link to={`/dashboard/admin/update-product/${p.slug}`} key={p._id} >
<div  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className="flex justify-center">
        <img className="p-8 rounded-t-lg object-fit h-52 w-full shadow-xl mb-3 " src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`} alt={p.name} />
        </div>

    <div className="px-5 pb-5 text-center  shadow-2xl mb-3 shadow-teal-500">

            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{p.name}</h5>
 
        <div className="flex items-center mt-2.5  mb-5">
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">4.0</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{`$${p.price}`}</span>
           
        </div>
    </div>
</div>
</Link>
</>




   ))}
    


    </div>
 
</div>
 </div>
 


 </Layout>
 </>
)
}

export default Products
