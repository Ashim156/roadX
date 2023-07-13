import { useEffect, useState } from "react"
import AdminMenu from "../../components/layout/AdminMenu"
import Layout from "../../components/layout/Layout"
import axios from "axios"
import { toast } from "react-toastify"
import CategoryForm from "../../components/form/CategoryForm"
import {Modal} from "antd";


const CreateCategory = () => {
  const [category,setCategory]=useState([])
  const [name,setName]=useState("")
  const [visible,setVisible]=useState(false)
  const [updateName,setUpdateName]=useState("")
  const [selected,setSelected]=useState(null)


  const handelSubmit=async(e)=>{
    e.preventDefault();
    try {
      const {data}=await axios.post("http://localhost:8080/api/v1/category/create-category",{name})
      if(data?.success){
        toast.success(`${name} is created`)
        getAllCategory()
        
      }
      else{
        toast.error("error to create")
      }
    } catch (error) {
      toast.error("error in form validation")
      
    }

  }
  
  
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
  const updateHandelSubmit = async (e) => {
    console.log("id",selected._id)
    e.preventDefault();
    try {
      
      const { data } = await axios.put(
        `http://localhost:8080/api/v1/category/update-category/${selected._id}`,
        { name: updateName }
      );
      if (data?.success) {
        toast.success(`${updateName} is updated`);
        setSelected(null);
        setUpdateName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelDelete = async (id) => {
  
    try {
      
      const { data } = await axios.delete(
        `http://localhost:8080/api/v1/category/delete-category/${id}`);
      if (data?.success) {
        toast.success(`category is deleted`);
       
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

useEffect(()=>{
getAllCategory()
},[])

  return (
    <Layout>

       <div className='w-[100%] grid grid-cols-3'>
      <AdminMenu/>
   <div className=' mt-6'>
   <h2 className='text-gray-800 text-[2rem] font-bold text-center'>CREATE CATEGORY</h2>
   <CategoryForm handleSubmit={handelSubmit} value={name} setValue={setName} btnLabel="Add Product"/>
   <div>
    <div>
  <div className="grid  grid-cols-2 gap-1 text-[2rem] font-bold ml-12 mt-5 -mb-4">
    <p className="">Name</p>
    <p>Action</p>
  </div>
  </div>
  <div >
  <div className="">
    {category?.map(c=>
   <> 
   <div className="grid grid-cols-3 gap-5 m-4 w-full  ">
   <div  className=" border-y-2 text-[2rem] text-center border-gray-300"  key={c._id}>{c.name}</div>
 
    <button className="  text-xl bg-blue-950 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/40 text-white font-semibold rounded-lg" type='submit' onClick={()=>{setVisible(true); 
    setUpdateName(c.name); 
    setSelected(c)}}>Edit</button>
     <button className="  text-xl bg-red-950 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg"  onClick={()=>{ 
   
    handelDelete(c._id)}}>Delete</button></div>
   
   
   </>)}
  </div>
  </div>
  <Modal onCancel={()=>setVisible(false)} footer={null} open={visible} >
  <CategoryForm handleSubmit={updateHandelSubmit} value={updateName} setValue={setUpdateName} btnLabel="Update Product" />
  </Modal>
</div>
   </div>
    </div>
    
   

    </Layout>
    
  )
}

export default CreateCategory
