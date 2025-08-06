import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-primary-100 bg-neutral-300 text-dirtygreen select-none">
      <div className="max-w-7xl mx-auto">
        <div className="lg:w-1/2">
          <span className="text-primary-600 font-semibold">Our Story</span>
          <h2 className="text-4xl font-bold mt-2 mb-6">More Than Just a Plant Shop</h2>
          <p className="text-lg mb-6">
            Founded with a passion for bringing nature indoors, Bloom & Root curates only the healthiest,
            most vibrant plants to transform your living space.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full md:w-[60%] lg:w-[60%]">
              <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/shop-interior.png"
                  alt="Our shop"
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute -bottom-4 -right-2 bg-primary-500 text-white p-6 rounded-lg shadow-lg">
                  <span className="block text-2xl font-bold">5+ Years</span>
                  <span> of Greening Homes</span>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <ul className="mb-8 flex items-center mt-6 gap-2">
              <li className="flex items-center">
                <CheckCircleIcon className="h-7 mr-2" />
                Sustainably sourced plants
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="text-primary-500 h-7 mr-2" />
                Local delivery available
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-7 mr-2" />
                Expert plant care advice
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}