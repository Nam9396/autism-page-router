import Link from "next/link";

export function LinkNavigate ({href, children}) {
  return (
    <Link href={href} target="_blank">{children}</Link> 
  )
}