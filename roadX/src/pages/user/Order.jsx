
import Layout from '../../components/layout/Layout'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import UserMenu from '../../components/layout/UserMenu'


const AdminDashboard = () => {
  const[auth]=useAuth()
  return (
    <Layout>

      <div className='w-[60%] grid grid-cols-2'>
      <UserMenu/>
   <div className='border-2 mt-6'>
     <div className="p-3 ">
order
   </div>

   </div>
   </div>
    </Layout>
  )
}

export default AdminDashboard
