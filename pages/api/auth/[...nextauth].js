import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from "axios";

const url= "https://restapprant.herokuapp.com/api/v1/auth/login";
const options = {
  site: 'http://localhost:3000/api/auth',
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Credentials({
      id: "username-login", 
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Login',
      credentials: {
        username: { name: "username", type: "text" },
        password: {  name: "password", type: "password" }
      },
      authorize: async (credentials) => {
                    console.log("credentials_:", credentials);
                    try {
                        const data = {
                            email: credentials.username,
                            password: credentials.password
                        }
                        // API call associated with authentification
                        var config = {
                              headers: {
                                  'Content-Type': "application/x-www-form-urlencoded",
                                  'corsOrigin': '*',
                                  "Access-Control-Allow-Origin": "*"
                              }
                          };
                         const user = await axios.post(url,data,config)
                            .then(res => {
                              console.log('res', res.data);
                              return res.data;
                            })
                            .catch(err => {
                              console.log('error in request', err);
                              return null; 

                            });

                          //const result = await axios.post(url, data, config);
                          console.log('_result:', user);
                          // const user = result;
                        
                          if (user) {
                            // Any object returned will be saved in `user` property of the JWT
                            return Promise.resolve(user);
                          }
                    } catch (error) {
                        if (error.response) {

                            console.log(error.response);
                            Promise.reject(new Error('Invalid Username  and Password combination'));
                        }
                    }

                    

       },//fin authorize
       session: {
       
        jwt: true, 
        
      }
    }),
  ],

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a seperate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,
 
  pages: {
     signIn: '/auth/login',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
     error: '/auth/login?', // Error code passed in query string as ?error=
    // verifyRequest: '/api/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks 
  callbacks: { 
    credentials: async( user,acount,profile) => {

      
      if (user) {
        return Promise.reject('/admin/dashboard') 
        
      } else {
        // Return false to display a default error message
        //return Promise.resolve(false)
        // You can also Reject this callback with an Error or with a URL:
       // return Promise.reject(new Error('error message')) // Redirect to error page
        return Promise.reject('/auth/login')        // Redirect to a URL
      }
     // return Promise.resolve(true)
      
    },
 
    session: async (session, user, sessionToken) => {
      session.role = 'admin' // Add property to session
      return Promise.resolve(session)
    }
    
 
  },

  
  // Enable debug messages in the console if you are having problems
  debug: true,
}

export default (req, res) => NextAuth(req, res, options)
