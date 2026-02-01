'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AnimatedSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION - ABOUT US */}
        <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
 
                <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                  About Us
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
              </div>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify max-w-4xl mx-auto mb-8">
                We started this company with a simple goal: to be a reliable
                wholesale partner for everyday consumable needs. As a trading
                business, we supply a wide range of essential products including
                hand gloves, sanding discs, fasteners, packaging materials,
                cleaning supplies, and other necessary industrial and commercial
                items.
              </p>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify max-w-4xl mx-auto mb-8">
                From sourcing to delivery, we focus on consistent quality, fair
                pricing, and timely service. We work closely with trusted
                manufacturers and brands to ensure our customers receive
                products they can depend on. Our clients come from various
                sectors including industrial, commercial, and maintenance
                operations, and we understand the importance of uninterrupted
                supply.
              </p>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify max-w-4xl mx-auto">
                As owners, we believe long-term relationships matter more than
                short-term gains. We listen to our customers, adapt to their
                requirements, and aim to add value through dependable support.
                Our commitment is to grow alongside our customers by being a
                trusted, responsive, and professional trading partner.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* OUR MISSION SECTION */}
        <section className="py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-16">

                <h2 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
                  Our Mission
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"></div>
              </div>

              <div className="max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-justify mb-8">
                  Our mission is to provide reliable industrial supply solutions
                  through efficient sourcing, dependable logistics, and
                  professional customer service, while operating with integrity
                  and consistency. We partner with businesses across diverse
                  sectors to ensure uninterrupted supply and exceptional value
                  at every step.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-blue-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Quality Assurance
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every product meets rigorous standards to ensure
                        customer satisfaction and trust.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-blue-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Reliable Delivery
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Consistent, on-time logistics ensuring your supply chain
                        never falters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-blue-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Fair Pricing
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Competitive rates without compromising on quality or
                        service standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-8 h-8 text-blue-600 mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Professional Support
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Dedicated team ready to address your specific
                        requirements and concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
                Ready to Partner With Us?
              </h2>

              <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get in touch with our team for quotations, product enquiries, or
                tailored sourcing solutions.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg"
              >
                <span>Contact Our Team</span>
                <ArrowRight size={22} />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
