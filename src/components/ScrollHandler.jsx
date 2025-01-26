import { useRouter } from 'next/router';
import { useEffect } from 'react';


export function ScrollHandler() {
  const router = useRouter()

  useEffect(() => {
    const url = router.asPath
    console.log('Current url: ', url)
    const hash = url.match(/#(.*)$/)?.[1] || ""
    console.log('Current hash: ', hash)
    if (hash) { 
      const element = document.getElementById(hash)
      console.log(element)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 2000)
        
      }
    } else { 
      setTimeout(() => {
        window.scrollTo({
          // top: document.documentElement.scrollHeight,
          top: 0,
          left: 0,
          behavior: "smooth", 
        });
      }, 2000)
    }
  }, [router.asPath])

  return null // No UI for this handler
}
