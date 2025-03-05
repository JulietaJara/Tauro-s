import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Location from "./components/Location"
import About from "./components/About"
import Chatbot from "./components/chat-bot"


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Chatbot />
        <Services />
        <Gallery />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

