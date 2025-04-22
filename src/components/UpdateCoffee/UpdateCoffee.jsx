import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
const coffee = useLoaderData();
const { _id, name,quantity,supplier,taste,category,details,photo}= coffee;

const handleUpdateCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    
    const updateCoffee = { name,quantity,supplier,taste,category,details,photo}
    // console.log(updateCoffee)
    


    // send data to server

   fetch(`http://localhost:5000/coffee/${_id}`,{
    method: 'PUT',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(updateCoffee)
   }) 
   .then(res => res.json())
   .then(data => {
   if(data.modifiedCount > 0)
   {
    Swal.fire({
        title: 'Successfully Updated Coffee!',
        // text: 'New Coffee Added',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
   }
   })

}

    return (
        <div className="m-20 border-2 p-5  bg-[#e8cd7d]">

        <div className="">
                    <div className="mx-auto  ">
                    <h1 className="text-4xl font-extrabold mt-12 text-center">Update Coffee : {name}</h1> 
                    </div>
                  
        <form onSubmit={handleUpdateCoffee}>
        
        <div className="   
         shadow-2xl  mt-8 p-4">
            {/* row-1 */}
              <div className="gap-5 mx-3  md:flex">
            
                <div className="md:w-1/2">
                <label >Coffee Name</label>
                  <input type="text" name="name" className="input w-full" 
                  defaultValue={name} placeholder="Coffee Name" />
                  
                </div>
            
                <div className="md:w-1/2">
                <label >Available Quantity</label>
                  <input type="text" name="quantity" className="input w-full"  defaultValue={quantity} placeholder="Available Quantity" />
                  
                </div>
            
              </div>
            {/* row-2 */}
              <div className="gap-5 mx-3  md:flex">
            
                <div className="md:w-1/2">
                <label >Supplier</label>
                  <input type="text" name="supplier" className="input w-full"  defaultValue={supplier} placeholder="Supplier" />
                  
                </div>
            
                <div className="md:w-1/2">
                <label >Taste</label>
                  <input type="text" name="taste" className="input w-full"  defaultValue={taste}  placeholder="Taste" />
                  
                </div>
            
              </div>
            {/* row-3 */}
              <div className="gap-5 mx-3  md:flex">
            
                <div className="md:w-1/2">
                <label >Category</label>
                  <input type="text" name="category" 
                  className="input w-full" 
                  defaultValue={category} placeholder="Category" />
                  
                </div>
            
                <div className="md:w-1/2">
                <label >Details</label>
                  <input type="text" name="details" className="input w-full"  defaultValue={details} placeholder="Details" />
                  
                </div>
            
              </div>
         
            {/* row-4 */}
              <div className=" mx-3 ">
            
                <div className="w-full">
                <label >Photo URL</label>
                  <input type="text" name="photo" className="input w-full"  defaultValue={photo} placeholder="Category" />
                  
                </div>
        
            
              </div>
         
            
              <input type="submit" value="Update Coffee" className="btn bg-green-600 m-3 w-3/4 flex mx-auto " />
            </div>
            
        </form>
        
                </div>
        
               </div>
    );
};

export default UpdateCoffee;