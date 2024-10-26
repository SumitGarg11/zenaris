// // // import { SignIn } from '@clerk/nextjs'

// // // export default function Page() {
// // //   return (

// // //     <section className="bg-white dark:bg-gray-900">
// // //     <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
// // //       <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
// // //         <img src = {"./image.png"}
       
// // //           className="absolute inset-0 h-full w-full object-cover opacity-80"
// // //         />
  
// // //         <div className="hidden lg:relative lg:block lg:p-12">
// // //           <a className="block text-white" href="#">
            
// // //           </a>
        
// // //         </div>
// // //       </section>
  
// // //       <main
// // //         className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
// // //       >
// // //         <div className="max-w-xl lg:max-w-3xl">
// // //           <div className="relative -mt-16 block lg:hidden">
// // //             <a
// // //               className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20 dark:bg-gray-900"
// // //               href="#"
// // //             >
// // //             </a>            
// // //           </div>
// // //           <SignIn/>
        
// // //         </div>
// // //       </main>
// // //     </div>
// // //   </section>
// // //   )
// // // }

// // import { SignIn } from '@clerk/nextjs'

// // export default function Page() {
// //   return (
// //     <section className="bg-white dark:bg-gray-900">
// //       <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        
// //         {/* Image Section - Only visible on large screens (lg and above) */}
// //         <section className="relative hidden lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
// //           <img
// //             src={"./image.png"}
// //             className="absolute inset-0 h-full w-full object-cover opacity-80"
// //             alt="Background"
// //           />
// //         </section>

// //         {/* Form Section - Always visible */}
// //         <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
// //           <div className="max-w-xl lg:max-w-3xl">

// //             {/* Logo for small and large screens */}
// //             <div className="flex justify-center lg:justify-start mb-6 lg:mb-12">
// //               <a href="/">
// //                 {/* Responsive logo */}
// //                 <img 
// //                   src={"./genrai.png"}
// //                   alt="Logo"
// //                   className="w-45 -ml-8 sm:w-40 md:w-48 lg:w-56 xl:w-64"  // Adjusts size based on screen width
// //                 />
// //               </a>
// //             </div>

// //             {/* Sign-in Form */}
// //             <SignIn />
// //           </div>
// //         </main>
// //       </div>
// //     </section>
// //   );
// // }

// import { SignIn } from '@clerk/nextjs'

// export default function Page() {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        
//         {/* Image Section - Only visible on large screens (lg and above) */}
        

//         {/* Form Section - Always visible */}
//         <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
//         <section className="relative hidden lg:flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
//           <img
//             src={"/image.png"}
//             layout="fill" objectFit="cover"
//             className="absolute inset-0 h-full w-full object-cover opacity-80"
//             alt="Background"
//           />
//         </section>
          
//           <SignIn afterSignInUrl="/dashboard" />
//         </main>
//       </div>
//     </section>
//   );
// }

// "use client"
// import { SignIn, useAuth } from '@clerk/nextjs'

// export default function Page() {
//   const { isSignedIn } = useAuth();

//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        
//         {/* Background Image - Always visible */}
//         <section className="relative hidden lg:flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
//           <img
//             src="/image.png"  // Ensure image path is correct
//             className="absolute inset-0 h-full w-full object-cover opacity-80"
//             alt="Background"
//           />
//         </section>

//         {/* Form Section */}
//         <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          
//           {isSignedIn ? (
//             // Content after sign-in (redirects to dashboard)
//             <p>Redirecting to the dashboard...</p>
//           ) : (
//             // Show SignIn form before sign-in
//             <SignIn afterSignInUrl="/dashboard" />
//           )}
          
//         </main>
//       </div>
//     </section>
//   );
// }


"use client"
import { SignIn, useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard if the user is signed in
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);  // Runs whenever `isSignedIn` changes

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        
        {/* Background Image - Always visible */}
        <section className="relative hidden lg:flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            src="/image.png"  // Ensure image path is correct
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            alt="Background"
          />
        </section>

        {/* Form Section */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          
          {isSignedIn ? (
            // Loading message while redirecting
            <p>Redirecting to the dashboard...</p>
          ) : (
            // Show SignIn form before sign-in
            <SignIn forceRedirectUrl="/dashboard" />
          )}
          
        </main>
      </div>
    </section>
  );
}




