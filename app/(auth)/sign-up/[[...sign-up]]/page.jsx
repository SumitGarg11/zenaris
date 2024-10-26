// import { SignUp } from '@clerk/nextjs'

// export default function Page() {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//     <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      
//       {/* Image Section - Only visible on large screens (lg and above) */}
//       <section className="relative hidden lg:flex h-30 items-end bg-gray-100 lg:col-span-5 lg:h-full xl:col-span-6">
//         <img
//           src={"./image.png"}
//           className="absolute inset-0 h-[100%]  w-full object-cover opacity-80"
//           alt="Background"
//         />
          
          
//       </section>

//       {/* Form Section - Always visible */}
//       <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
//         <div className="max-w-xl lg:max-w-3xl">

//           {/* Logo for small and large screens */}
          

//           {/* Sign-in Form */}
//           <SignUp />
//         </div>
//       </main>
//     </div>
//   </section>
//   )
  
// }


"use client"
import { SignUp } from '@clerk/nextjs'
import { useAuth } from '@clerk/nextjs'
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
            <SignUp forceRedirectUrl="/dashboard" />
          )}
          
        </main>
      </div>
    </section>
  );
}