"use client"

import Spinner from "app/Component/spinner/Spinner";
import { useEffect, useState } from "react";

function AddProForm({productId}) {
  const [imgUrl, setImgUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [descPro, setDescPro] = useState("");
  const [dataAccs, setdataAccs] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  
  const [accountsString,setaccountsString]=useState("")
  const [erroMsg, setErroMsg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
   const [targetPro,setTargePro]=useState({})
  console.log("----------------")
console.log(productId)
  // //get data from api 
  

  // Fetch data from the API
useEffect(() => {
  fetch(`/api/fetchOnePro/?id=${productId}`)
.then(response => {
  // Check if the response is ok (status code 200-299)
  if (!response.ok) {
    throw new Error("Network response was not ok " + response.statusText);
  }
  // Convert the response to JSON
  return response.json();
})
.then(data => {
  // Handle the JSON data
  console.log("-------=====================================---------")
  console.log(data);
  console.log("dat accs 000000000000000000")
  console.log(data.dataAccs)
  setTargePro(data)
  setaccountsString(data.dataAccs.join("/"))
  console.log("1111111111111111111111")

  // console.log(productIDdddd)
  // You can use the data here
  
  // if i admin doesn't change the value of input the default value will be the data object that comming from backend
  setTitle(data.title );
  setDescPro(data.descPro );
  setPrice(data.price );
  setQuantity(data.quantity );
})
.catch(error => {
  // Handle any errors that occurred during the fetch
  console.error("There was a problem with the fetch operation", error);
});
},
[productId]
)



 const handelUpdate= async(eo) => {
  eo.preventDefault()
  if(!title||!descPro||!price||!quantity||!dataAccs){
    setErroMsg(true)
    return
  }
     setIsLoading(true)
  
   console.log("done submit event when update the product")
 

    const updateRes=await fetch("/api/updateProduct",{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,descPro,price,quantity,dataAccs,productId
      }),
    })


    console.log(updateRes)
    if(updateRes.ok){
      setSuccess(true)
      setErroMsg(false)
      setIsLoading(false)
    }else{
      setErroMsg(true)
      setSuccess(false)
    }
    setIsLoading(false)

 }

 
 

  return (
    <>
      <form onSubmit={handelUpdate}  action="" className="add-pro-form">
        {/* Input for image of products */}
        <div className="img-url">
          <label htmlFor="img-url">
            <strong className="text-red-400">*</strong>
            Enter URL of image of product
          </label>
          {/* Input receives image as a file */}
          <input
        
            
            id="img-url"
            type="file"
            accept="image/*"
          />
          <span className="guid">?</span>
        </div>

        {/* Input for title of products */}
        <div className="pro-title">
          <label htmlFor="title">
            <strong className="text-red-400">*</strong>
            Enter title of product
          </label>
          {/* Input summarizes a received string using the fewest words possible as title */}
          <input
          // @ts-ignore
          defaultValue={targetPro.title}
            onChange={(eo) => setTitle(eo.target.value)}
            type="text"
            id="title"
            placeholder="Example: TikTok accounts 1k real followers"
          />
          <span className="guid">?</span>
        </div>

        {/* Input for description of products */}
        <div className="pro-desc">
          <label htmlFor="desc">
            <strong className="text-red-400">*</strong>
            Enter description of product
          </label>
          {/* Text area receives a detailed product description */}
          <textarea
            // @ts-ignore
            defaultValue={targetPro.descPro}
            onChange={(eo) => setDescPro(eo.target.value)}
            placeholder="Write a good description of your product"
          />
          <span className="guid">?</span>
        </div>

        {/* Input for accounts */}
        <div className="pro-accs">
          <label htmlFor="accs">
            <strong className="text-red-400">*</strong>
            Enter your products and separate between each product with //
          </label>
          {/* Text area receives a detailed product description */}
          <textarea
            defaultValue={accountsString}
            id="accs"
            onChange={(eo) => setdataAccs(eo.target.value)}
            placeholder="Account1 // Account2 // Account3"
          />
          <span className="guid">?</span>
        </div>

        {/* Input for price of products */}
        <div className="pro-price">
          <label htmlFor="price">
            <strong className="text-red-400">*</strong>
            Enter price of product
          </label>
          {/* Text area receives a detailed product description */}
          <input
            // @ts-ignore
            defaultValue={targetPro.price}
            onChange={(eo) => setPrice(eo.target.value)}
            step={0.1}
            type="number"
            id="price"
            placeholder="9 USD"
          />
          <span className="guid">?</span>
        </div>

        {/* Input for quantity of products */}
        <div className="pro-quantity">
          <label htmlFor="quantity">
            <strong className="text-red-400">*</strong>
            Enter quantity of product
          </label>
          {/* Text area receives a detailed product description */}
          <input
                // @ts-ignore
                defaultValue={targetPro.quantity}  
            onChange={(eo) => setQuantity(eo.target.value)}
            type="number"
            id="quantity"
            placeholder="1000 pcs"
          />
          <span className="guid">?</span>
        </div>

        {/* Loading spinner when sending data */}
        {isLoading ? <Spinner /> : <button type="submit">Update Product</button>}

        {/* Error and success messages */}
        {erroMsg && (
          <span className="errorStore bg-red-100 text-red-400 p-3 rounded-md">
            sorry  the product doesnt updated 
          </span>
        )}
        {success && (
          <span className="successStore bg-green-100 text-green-600 p-3 rounded-md">
            done the product updated successfully
          </span>
        )}
      </form>
    </>
  );
}

export default AddProForm;
