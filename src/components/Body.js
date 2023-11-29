import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
//   import Login from './Login';





const Body = () => {
  
    
      //   const appRouter=createBrowserRouter([
      //   {
      //        path:"/",
      //       element:<Login />
      //    },
   
      // ])

    return ( 
       <div className='flex'>
<SideBar />
<MainContainer />
        {/* <RouterProvider router={appRouter} />  */}
           </div>
  )
}

export default Body