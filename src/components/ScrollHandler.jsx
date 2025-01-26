'use client';

// import { usePathname } from "next/navigation"
// import { useEffect } from "react"


// export function ScrollHandler() { 
//   const pathname = usePathname()

//   useEffect(() => {
//     const hash = window.location.hash.replace('#', '')
//     console.log(window.location.href)
    
//     if (hash) { 
//       console.log(hash)
//       const element = document.getElementById(hash)
//       if (element) { 
//         setTimeout(() => {
//           element.scrollIntoView({ block: 'end', behavior: 'smooth' })
//         }, 1000)
//       }
//     } else {
//       console.log('hash is not available')
//       setTimeout(() => {
//         window.scrollTo({ top: '0', behavior: 'smooth' })
//       }, 1000)
//     }
//   }, [window.location.href])

//   return null
// }


import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// export function useHash() {
//   const router = useRouter()
//   const [hash, setHash] = useState(() => {
//     // Initialize hash only if running in the browser
//     if (typeof window !== 'undefined') {
//       return window.location.hash;
//     }
//     return ''; // Return an empty string on the server
//   });

//   useEffect(() => {
//     const handleHashChange = () => {
//       setHash(window.location.hash);
//     };
//     window.addEventListener('hashchange', handleHashChange);

//     return () => {
//       window.removeEventListener('hashchange', handleHashChange);
//     };
//   }, [router.asPath]);

//   return hash;
// }


export function ScrollHandler() {
  // const currentHash = useHash()
  const router = useRouter()
  // const path = router.pathname
  // const asPath = router.asPath

  // console.log('Current hash: ', currentHash)

  // console.log('pathName: ', path)

  // console.log('asPath: ', asPath)

  // useEffect(() => {
  //   console.log('Current hash: ', window.location.hash)
  //   if (window.location.hash) { 
  //     const element = document.getElementById(window.location.hash.replace('#', ''))
  //     console.log(element)
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth', block: 'end' });
  //     }
  //   }
  // }, [asPath])

  useEffect(() => {
    const url = router.asPath
    console.log('Current url: ', url)
    const hash = url.match(/#(.*)$/)?.[1] || ""
    console.log('Current hash: ', hash)
    if (hash) { 
      const element = document.getElementById(hash)
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
    } else { 
      window.scrollTo({
        top: document.documentElement.scrollHeight, // Scroll to the bottom
        left: 0,
        behavior: "smooth", // Smooth scrolling (optional)
      });
    }
  }, [router.asPath])

  return null // No UI for this handler
}
