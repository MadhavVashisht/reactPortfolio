import { useEffect, useState } from "react"

const useIsMobile = (query = "(max-width : 639px)") =>{
  const [IsMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.matchMedia(query).matches
  )
  useEffect(() => {
    if(typeof window === "undefined") return;
    const mql =window.matchMedia(query);
    const handler = event => setIsMobile(e.matches)
  })
}
export default function projects(){
  return(
    <section id="Projects"
    className="relative text-white">

    </section>
  )
}