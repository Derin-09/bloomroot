import { FaLeaf } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-no-repeat " 
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/hero-bg.avif') " }}>
      
      <div className="text-center px-6 max-w-4xl mx-auto pl-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Bring Life Into Your Home
        </h1>
        <p className="text-xl md:text-2xl text-primary-100 mb-8">
          Hand-selected plants to transform your space into a green oasis
        </p>
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-70">
        <FaLeaf className="text-primary-300" />
      </div>
    </section>
  );
}