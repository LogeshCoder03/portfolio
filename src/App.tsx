import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/sections/Home"

  const sections = [
    "home","about","skills","projects",
    "contact"]

const App = () => {
      const [activeSection,setActiveSection]=useState('home')

    const handleScroll=(id:string)=>{
        document.getElementById(id)?.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    }
    useEffect(()=>{
        const observer=new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin:"-100px 0px -60% 0px",
                threshold:0
            }
        )
        sections.forEach(
            (section)=>{
                const element=document.getElementById(section)
                if (element){
                    observer.observe(element!)
                }
            }
        )
        return ()=>observer.disconnect()
    },[])
    return (
        <div>
            <Navbar active={activeSection} onChangeSection={(id)=>{handleScroll(id)
                setActiveSection(id)
            }}/>
            <main>
                <Home/>
            </main>
        </div>
    )
}

export default App