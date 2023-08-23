import React, { useEffect } from 'react';


function Img_func() {

   useEffect(() => {
      console.log('didmount(img)');
      return (() => console.log('Component destroy'));
   }, []);


   return (
      <div>
         <img src='https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' width="300px" />
      </div>
   );



}

export default Img_func;

