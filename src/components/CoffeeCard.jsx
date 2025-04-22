import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,coffees, setCoffees}) => {
  // console.log(coffee,coffees,setCoffees);
 const { _id , name,quantity,supplier,taste,category,details,photo} = coffee;
 
 
const handleDelete = _id => {
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  
   fetch(`http://localhost:5000/coffee/${_id}`,{
    method: 'DELETE'
   })
   .then(res => res.json())
   .then(data => {
    // console.log(data);
    if(data.deletedCount > 0)
    {
  Swal.fire({
      title: "Deleted!",
      text: "Coffee has been deleted.",
      icon: "success"
    });
    const remaining = coffees.filter(cof => cof._id !== _id);
    setCoffees(remaining);
    }

   })
  }
});
}

    return (
        <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={photo}
            alt="Movie" />
        </figure>
        <div className="flex justify-between w-full md:px-4 md:py-8 lg:p-8">
         <div>
         <h2 className="card-title">Name : {name}</h2>
         <p>Quantity : {quantity}</p>
         <p>Supplier : {supplier}</p>
         <p> Taste : {taste}</p>
         </div>
          <div className="card-actions justify-end">
          <div className="join md:mt-4 join-vertical gap-3">
  <button className=" rounded-full">View</button>
  <Link to={`updateCoffee/${_id}`}>
  <button className=" ">Edit</button>
  </Link>
  <button onClick={() => handleDelete(_id)} className=" text-red-600 font-bold   ">X</button>
</div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;