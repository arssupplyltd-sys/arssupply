'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

const products = [
  {
    name: 'Industrial Handgloves',
    image: '/images/products/Industrial_handgloves.jpg',
  },
  {
    name: 'Abrasives',
    image: '/images/products/abrasives.jpg',
  },
  {
    name: 'Cleaning Materials and Equipments',
    image: '/images/products/cleaning-equipment.jpg',
  },
  {
    name: 'CNC Machined Parts',
    image: '/images/products/cnc-parts.jpg',
  },
  {
    name: 'Machine Tools And Accessories',
    image: '/images/products/machine-tools.jpg',
  },
  {
    name: 'Welding Equipment and Consumables',
    image: '/images/products/welding-equipment.jpg',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our comprehensive range of industrial products.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col items-center"
                >
                  {/* Image */}
                  <div className="w-[250px] h-[250px] relative mt-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Name */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              For quotations and product enquiries, please contact us.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
