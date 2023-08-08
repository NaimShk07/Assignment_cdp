import React from 'react';

function Func_prop({ img, title, disc }) {
   return (

      <div className="col-md-3 mx-3">
        <h2>Function</h2>
         <div className="card" style={{ width: 400 }}>
            <img className="card-img-top" src={img} alt="Card image" style={{ width: '100%' }} />
            <div className="card-body">
               <h4 className="card-title">{title}</h4>
               <p className="card-text">{disc}</p>
               <a href="#" className="btn btn-primary stretched-link">See Profile</a>
            </div>
         </div>
      </div>

   );
}

export default Func_prop;