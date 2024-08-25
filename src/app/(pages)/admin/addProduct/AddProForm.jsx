"use client"

import Spinner from "app/Component/spinner/Spinner";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AddProForm() {
  const [imgUrl, setImgUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [descPro, setDescPro] = useState("");
  const [dataAccs, setdataAccs] = useState('');
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [erroMsg, setErroMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  const router=useRouter()
// check if the user is a admin

  // Handle submit and send it to database 
  const storeProDetails = async (e) => {
    e.preventDefault();
    setErroMsg("");
    setSuccess("");
    setIsLoading(true);

    // Check if any of the fields are empty 
    if (!title || !descPro || !price || !quantity || !imgUrl || !dataAccs) {
      setErroMsg("Please fill in all fields as they are required.");
      setIsLoading(false);
      return;
    }

    // Send data to server side 
    const formData = new FormData();
    formData.set("imgUrl", imgUrl);
    formData.set("title", title);
    formData.set("descPro", descPro);
    formData.set("dataAccs", dataAccs);
    formData.set("price", price);
    formData.set("quantity", quantity);

    try {
      const resStorePro = await fetch("/api/storeproducts", {
        method: "POST",
        body: formData,
      });

      if (resStorePro.ok) {
        setIsLoading(false);
        setSuccess("Product added successfully!");
        console.log("Product saved successfully!");
      } else {
        setSuccess("");
        setIsLoading(false);
        setErroMsg("Something went wrong. Please try again!");
        console.log("Error saving product");
      }
    } catch (error) {
      // setSuccess("");
      // setIsLoading(false);
      // setErroMsg("Something went wrong. Please try again!");
      console.error("Error:", error);
    }
  };

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImgUrl(file);
  };
 
if(status=="unauthenticated"){
  return(
    <Link href="Login">Login please first</Link>
  )
}
   if(status=="authenticated"){
    if(session.user.email !== "admin@gmail.com"){
      return(
        <h1>this page just for admin's</h1>
      )
    }
  
   }
    

if(status=="authenticated"&& session.user.email=="admin@gmail.com"){
  return (
    <>
      <form onSubmit={storeProDetails} action="" className="add-pro-form">
        {/* Input for image of products */}
        <div className="img-url">
          <label htmlFor="img-url">
            <strong className="text-red-400">*</strong>
            Enter URL of image of product
          </label>
          {/* Input receives image as a file */}
          <input
            onChange={handleFileChange}
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
            onChange={(eo) => setQuantity(eo.target.value)}
            type="number"
            id="quantity"
            placeholder="1000 pcs"
          />
          <span className="guid">?</span>
        </div>

        {/* Loading spinner when sending data */}
        {isLoading ? <Spinner /> : <button type="submit">Save Product</button>}

        {/* Error and success messages */}
        {erroMsg && (
          <span className="errorStore bg-red-100 text-red-400 p-3 rounded-md">
            {erroMsg}
          </span>
        )}
        {success && (
          <span className="successStore bg-green-100 text-green-600 p-3 rounded-md">
            {success}
          </span>
        )}
      </form>
    </>
  );
}

  
}

export default AddProForm;
