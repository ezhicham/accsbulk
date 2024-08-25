"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function page() {
  const { data: session, status } = useSession();
const router=useRouter()
  
useEffect(() => {
  if(status==="unauthenticated"){
    router.replace("/Login")
  }
},
[status]
)

  return (
    <div>
      test
    </div>
  )
}

export default page
