import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import FreqAskedQues from './FreqAskedQues'
import Team from './Team'
import Clients from './Clients'
import Contact from './Contact'
import Newsletter from './Newsletter'
import Footer from './Footer'
import ChatWidget from './ChatWidget'

const Home = () => {
  return (
    <div className="container min-w-full min-h-lvh secondary-font">
      <NavBar />
      
      <section className="w-full h-screen lg:px-0 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
     <Hero />
      </section>

      <section id="about" className="w-full lg:px-2 mt-10 overflow-hidden bg-[#ffffff] border-b border-orange-100">
        <About />
      </section>
      <section id="services" className="w-full py-16 lg:px-10 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
  <Services />
</section>

      <section id="portfolio" className="w-full max-h-fit py-16 lg:px-10 overflow-hidden border-b border-orange-100">
        <Portfolio />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <FreqAskedQues />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Team />
      </section>
      <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Clients />
      </section>
      <section id="contact" className="w-full max-h-fit py-16 lg:px-32 overflow-hidden border-b border-orange-100">
        <Contact />
      </section>
      {/* <section className="w-full max-h-fit py-16 lg:px-32 overflow-hidden bg-[#FEFAF8] border-b border-orange-100">
        <Newsletter />
      </section> */}
      <section className="w-full max-h-fit py-16 lg:px-30 overflow-hidden border-b border-orange-100 relative">
  <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" style={{ backgroundImage: 'url(https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg)' }}></div>
  <div className="relative z-10">
    <Footer />
  </div>
</section>
<ChatWidget />

    </div>
  )
}

export default Home