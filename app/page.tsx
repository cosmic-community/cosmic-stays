import { getProperties, getTestimonials } from '@/lib/cosmic';
import PropertyCard from '@/components/PropertyCard';
import TestimonialCard from '@/components/TestimonialCard';
import HeroSection from '@/components/HeroSection';
import PropertyFilter from '@/components/PropertyFilter';

export default async function HomePage() {
  const properties = await getProperties();
  const testimonials = await getTestimonials();

  return (
    <div>
      <HeroSection />
      
      {/* Properties Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
              Explore Our Properties
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover handpicked vacation rentals that offer unique experiences and unforgettable memories.
            </p>
          </div>
          
          <PropertyFilter properties={properties} />
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4">
                What Our Guests Say
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Read reviews from travelers who have experienced our properties.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}