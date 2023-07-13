
import Headers from './Headers'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  
  return (<>
    <Headers />
    
     <main className='bg-gradient-to-br from-green-50 to-gray-200 ' >
      <ToastContainer/>
     {children}
     </main>
    <Footer />
    </>
  )
}

export default Layout
