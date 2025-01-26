import { useRouter } from 'next/router';
import { useEffect } from 'react';


export function ScrollHandler() {
  const router = useRouter()

  useEffect(() => {
    const url = router.asPath
    const hash = url.match(/#(.*)$/)?.[1] || ""
    const isMobile = () => window.innerWidth <= 768

    if (isMobile) { 
      if (hash) { 
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'instant', block: 'start' });
          }, 500)
        }
      } else { 
        setTimeout(() => {
          window.scrollTo({
            // top: document.documentElement.scrollHeight,
            top: 0,
            left: 0,
            behavior: "instant", 
          });
        }, 500)
      }
    }
    // } else {
    //   if (hash) { 
    //     const element = document.getElementById(hash)
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'instant', block: 'start' })
    //     }
    //   } else { 
    //     window.scrollTo({
    //       // top: document.documentElement.scrollHeight,
    //       top: 0,
    //       left: 0,
    //       behavior: "instant", 
    //     })
    //   }
    // }
  }, [router.asPath])

  return null // No UI for this handler
}
