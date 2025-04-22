
import { Link, useLoaderData } from 'react-router-dom';
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';
import Header from './components/Header';

function App() {

const loadedCoffees = useLoaderData();
const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <>
   <Header></Header>
    <div className='text-center'>
 <div className='m-20'>
 




{/* <button className="btn btn-success"><Link to='/addCoffee'>AddCoffee</Link></button> */}

 </div>
    </div>
<div className='grid m-10 md:grid-cols-2 gap-4'>
{
  coffees.map(coffee=> <CoffeeCard
  key={coffee._id}
   coffee={coffee}
  coffees = {coffees}
   setCoffees={setCoffees}
  ></CoffeeCard>)
  
}

</div>

    </>
  )
}

export default App;
