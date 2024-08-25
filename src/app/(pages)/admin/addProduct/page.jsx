
import AddProForm from "./AddProForm"
import "./addProduct.css"

function page() {
  return (
    <div className="add-prod-admine mt-10">
      <div className="title">
        <h1>add products just by admin's</h1>
        {/* guides and rules  */}
        <div className="guides">
          <p className="bg-red-400 text-white p-5">Adding illegal
             products to my website is strictly prohibited. Compliance 
            with all legal regulations is mandatory for all listings....
             <a href="">learn more</a></p>
          <ul>
            <li>don't publish any forbiden products</li>
            <li>don't publish any forbiden products</li>
            <li>don't publish any forbiden products</li>
          </ul>
        </div>
      </div>


    {/* form to add products to database  */}
    <AddProForm/>

    </div>
  )
}

export default page
