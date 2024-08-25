import userModel from "app/mongoDbConfig/models/userSchema";
import { connectMongoDB } from "app/mongoDbConfig/mongoDb";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";

export const authOptions = {


  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {


        // conect to database 
        await connectMongoDB()

        // check if the email exist or no
        const user = await userModel.findOne({
          // @ts-ignore
          email: credentials.email
        })
        // Add logic here to look up the user from the credentials supplied

        if (user) {
          console.log("yes the user is exist login successfully ")
          
          // compare(credentials.password, user.password);
          // @ts-ignore
          const match = await bcrypt.compare(credentials.password, user.password);
          if (match) {
            console.log("yes the password's matches")
             return user;
             } else { 
              console.log("no password not match")
              return null;
             }
        
        } else {
          console.log("sorry this email not exist please register or use another email ")
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  }

};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };