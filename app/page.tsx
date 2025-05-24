import HeroSection from './components/HeroSection/HeroSection'
//import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import AboutSection from './components/AboutSection/AboutSection'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts/>
      <AboutSection />
      <ContactForm />
      <Footer/>
    </main>
  )
}