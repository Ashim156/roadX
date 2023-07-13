
import axios from 'axios';
import Layout from '../components/layout/Layout';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Checkbox,Radio } from 'antd';
import { price } from '../components/Price';
const HomePage = () => {
  
  const[product,setProduct]=useState([]);
  const [category,setCategory]=useState([]);
  const [checked,setChecked]=useState([])
  const [radio,setRadio]=useState([]);
  const getAllCategory=async()=>{
    try {
     const {data}=await axios.get("http://localhost:8080/api/v1/category/get-category")
     if(data?.success){
       setCategory(data.category)
       
     }
    } catch (error) {
     toast.error("something went wrong")
     
    }
   }
   useEffect(()=>{
    getAllCategory()
    },[])

  const getProducts=async()=>{
    try {
        const {data}= await axios.get("http://localhost:8080/api/v1/product/get-product")
        
        if(data?.success){
          setProduct(data.product)
          console.log("dataa",data)
        }
       } catch (error) {
        toast.error("error")
       
        
       }

    }
   
    // filter by category
    const filterC=(value,id)=>{
      let all= [...checked]
      if(value){
        all.push(id)

      }
      else{
        all=all.filter((c)=>c!==id)
      }
setChecked(all);    
    }
    useEffect(()=>{
      if(!checked.length || !radio.length) getProducts()
     },[checked.length,radio.length])
     useEffect(()=>{
       if(checked.length || radio.length) filterProduct()
      },[checked,radio])
    // get filtered product
const filterProduct=async()=>{
try {
  const {data}=await axios.post("http://localhost:8080/api/v1/product/filter-product",{checked,radio});
setProduct(data?.product)

} catch (error) {
  console.log(error)
  
}
}

  return (
  <>
  <Layout >
    <div className=' w-full min-h-[100vh] bg-black grid grid-cols-4 '>
      <div className='grid grid-rows-2 w-full h-[100%]'>
        <div className='bg-red-400 w-full h-full'>
          <h1 className='text-center text-4xl font-serif'>Filter By Category</h1>
          {/* {JSON.stringify(checked,null,4)} */}
          <div >
          
              {category?.map(c=>(
                <>
                <Checkbox className='flex flex-row' key={c._id} onChange={((e)=>filterC(e.target.checked,c._id))}>
                  {c.name}

                </Checkbox>
                </>

              ))}
            

          </div>

        </div>
        <div className='w-full  bg-slate-200'>
        <h1 className='text-center text-4xl font-serif'>Filter by Price</h1>
        {/* {JSON.stringify(radio,null,4)} */}
        <div >
    
          
        <Radio.Group onChange={(e)=>setRadio(e.target.value)}>
                {price?.map(p=>(
                 <>
                 
                  <div className='flex flex-row' key={p._id}>
                 <Radio  value={p.value}  >
                  {p.name}
                 </Radio>
                 </div>
              
                 </>
                ))}
                </Radio.Group>
  
            

          </div>
          <button  className='bg-black w-28 text-white' onClick={()=>window.location.reload()}>Reset Button</button>
        </div>
      
        
      </div>
      <div className='grid col-span-3 h-[100%] text-white'>
      <h1 className='text-center text-4xl font-serif'>All Products</h1>
      <div className="grid gap-3 grid-cols-3">
        {product?.map(p=>(
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
                <div className='flex gap-3 cursor-pointer'>
                  <button>More Info</button>
                  <button>Add to Cart</button>
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

export default HomePage
