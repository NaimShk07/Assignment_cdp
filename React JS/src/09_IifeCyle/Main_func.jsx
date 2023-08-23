import React, { useEffect, useState } from 'react';
import Img_func from './Img_func';


function Main_func() {
   const [nothidden, setnothidden] = useState(true);
   const [number, setnumber] = useState(1);


   //   useEffect(()=>{
   //     console.log('didmount/updated'); // both in one line
   //   },[number]);    

   useEffect(() => {
      console.log("born / didmount(main)");
   }, []);

   useEffect(() => {
      console.log('updated / didupdate');
   }, [nothidden, number]);







   return (
      <div className='container'>
         <br></br>
         <button onClick={() => setnothidden(true)}>Show</button>
         <button onClick={() => setnothidden(false)}>Hide</button>
         <button onClick={() => setnothidden(!nothidden)}>Hide/show</button>

         {nothidden ? <Img_func /> : null}
         <br></br>
         <br></br>

         <button onClick={() => setnumber(number + 1)}>+</button>
         <h1>{number}</h1>
         <button onClick={() => setnumber(number - 1)}>-</button>

      </div>
   );
}

export default Main_func;