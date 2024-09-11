// import NextAuth, { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import insertCustomerData from '../../../lib/insertCustomerData';
// import { cookies } from 'next/headers';
// import {mergeCarts} from '../../../lib/cart'
// import {mergeWishlists} from '../../../lib/wishlist'
// // import checkCustomerData from '../../../lib/checkCustomerData';
// // import { Jwt } from 'jsonwebtoken';
// // import { redirect } from 'next/navigation';

// const SECRET_KEY = 'my_secret_key';

// const Options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       id: 'credentials',
//       name: 'Credentials',
//       credentials: {
//         username: { label: "Username", type: "text" },
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//         confirmPassword: { label: "Confirm Password", type: "password", optional: true },
//       },
//       async authorize(credentials) {
//         const { username, email } = credentials || {};
//         console.log('email', email);

//         // Registration logic
//         const data = {
//           name: username,
//           email: email,
//         };
//         try {
//           const user = await insertCustomerData(data);
//           console.log('User created:', user);
//           return {
//             id: user.recordsId,
//             name: username,
//             email: email
//           };
//         } catch (error) {
//           console.error('Error:', error);
//           return null;
//         }
//       },
//     }),
//     FacebookProvider({
//       clientId: '1225670745001290',
//       clientSecret: '673f19c282bb1bdd9358d7649bcf69b9',
//     }),
//     GoogleProvider({
//       clientId: '532074335991-hrnusfsf63sp316d2j7jok53m7uudqpr.apps.googleusercontent.com',
//       clientSecret: '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',
//     })
//   ],
//   secret: SECRET_KEY,
//   pages: {
//     signIn: '/signin', // Custom sign-in page
//     newUser:'/signin'
//   },
//   session: {
//     strategy: 'jwt',
//     maxAge: 24 * 60 * 60,
//   },
//   callbacks: {
//     async redirect() {
//       return '/'
//     },
//     async signIn({ account, profile }) {
//       if (account?.provider === "google")
//       {
//         const user = {
//           id: profile?.sub, // Google user ID
//           name: profile?.name,
//           email: profile?.email,
//         };

//         if (user.id) {
//           cookies().set('userId', user.id); // Ensure user.id is defined
//           await mergeCarts(user.id);
//           await mergeWishlists(user.id);
//           account.userId = user.id;
//         } else {
//           console.error('User ID is undefined.');
//         }
        
//         // try {
//         //   await insertCustomerData(user);
//         // } catch (error) {
//         //   console.error('Error storing user:', error);
//         // }
//         // cookies().set('userId', user.id)
//         // await mergeCarts(user.id)
//         // await mergeWishlists(user.id)

//         // account.userId = user.id;
//       }
//       //    {
//       // //   try {
//       // //     const customers = await checkCustomerData();
//       // //     console.log(customers, '<===customers');

//       // //     const userExist = customers.find((customer:any) => customer.email === profile?.email);
//       // //     console.log('User exists:', userExist);

//       // //     if (userExist) {
//       // //       console.log('Login successful');
//       // //       return true
//       // //     } else {
//       // //       console.log('User not found, creating new user...');
//       // //       await insertCustomerData(profile);
//       // //       console.log('User created');
//       // //       return false
//       // //     }
//       // //   } catch (error) {
//       // //     console.error('Error during sign-in/sign-up:', error);
//       // //     return false;
//       // //   }
//       // }
//       return true; 
//     },
//     async jwt({ token, account }) {
//       // Persist user ID to the token
//       if (account?.userId) {
//         token.userId = account.userId;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (!session.user) {
//         session.user = {};
//       }
//       // Include user ID in the session
//       if (token?.userId) {
//         session.user.id = token.userId;
//         // console.log('sess',session)
//       }
//       return session;
//     },
//   },
// };

// const handler = NextAuth(Options);
// export { handler as GET, handler as POST };


// Avinash Added Logic

import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import insertCustomerData from '../../../lib/insertCustomerData';
import { cookies } from 'next/headers';
import { mergeCarts } from '../../../lib/cart';
import { mergeWishlists } from '../../../lib/wishlist';

// Extend the Session interface to include the `id` property
declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const SECRET_KEY = 'my_secret_key';

const Options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        confirmPassword: { label: "Confirm Password", type: "password", optional: true },
      },
      async authorize(credentials) {
        const { username, email } = credentials || {};

        const data = {
          name: username,
          email: email,
        };
        try {
          const user = await insertCustomerData(data);
          return {
            id: user.recordsId,
            name: username,
            email: email
          };
        } catch (error) {
          console.error('Error:', error);
          return null;
        }
      },
    }),
    FacebookProvider({
      clientId: '1225670745001290',
      clientSecret: '673f19c282bb1bdd9358d7649bcf69b9',
    }),
    GoogleProvider({
      clientId: '532074335991-hrnusfsf63sp316d2j7jok53m7uudqpr.apps.googleusercontent.com',
      clientSecret: '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',
    })
  ],
  secret: SECRET_KEY,
  pages: {
    signIn: '/signin',
    newUser: '/signin'
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async redirect() {
      return '/'
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const user = {
          id: profile?.sub, // Google user ID
          name: profile?.name,
          email: profile?.email,
        };

        if (user.id) {
          cookies().set('userId', user.id);
          await mergeCarts(user.id);
          await mergeWishlists(user.id);
          account.userId = user.id;
        } else {
          console.error('User ID is undefined.');
        }
      }
      return true; 
    },
    async jwt({ token, account }) {
      if (account?.userId) {
        token.userId = account.userId;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.userId) {
        // session.user.id = token.userId;
        session.user.id = token.userId as string
      }
      return session;
    },
  },
};

const handler = NextAuth(Options);
export { handler as GET, handler as POST };
