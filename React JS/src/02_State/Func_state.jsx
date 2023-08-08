import React, { useState } from 'react';
import Img from './Img';


function Func_state() {

   const [name, setName] = useState('Naim shaikh');

   const [user, setUser] = useState({
      name: "naim",
      age: 19,
      number: 1,
      isImage: true
   });

   return (
      <div>
         <button onClick={() => setName("nayemm")}>change</button>
         <h1>{name}</h1>
         <hr />
         <h1>{user.name} and {user.age}</h1>
         <button onClick={() => setUser({ ...user, name: "nayem", age: 2 })}>change</button>

         <hr />

         <button onClick={() => setUser({ ...user, number: user.number + 1 })}>+</button>
         <h1>{user.number}</h1>
         <button onClick={() => setUser({ ...user, number: user.number - 1 })}>-</button>

         <hr />
         <button onClick={() => setUser({ ...user, isImage: false })}>hide</button>
         <button onClick={() => setUser({ ...user, isImage: true })}>show</button>
         <button onClick={() => setUser({ ...user, isImage: !user.isImage })}>hide/show</button>

         {user.isImage ? <Img/> : null}

      </div>
   );
}

export default Func_state;