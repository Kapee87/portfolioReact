import { useState } from "react"
import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"


function App() {
const [currentSlide, setCurrentSlide] = useState(1)


  return (
    <>
      <main className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <Hero />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <About />
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide4`} className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
