import "./AllProducts.css"
import GetAllProducts from "./GetAllProducts"

function page() {
  return (
    <div>
         <div className="filter bg-gray-200 p-2 w-screen h-12 my-6"></div>
           
           <GetAllProducts/>
      
    </div>
  )
}

export default page
