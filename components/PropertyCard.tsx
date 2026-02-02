import Link from 'next/link';
import { Property, Host } from '@/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const gallery = property.metadata.gallery || [];
  const firstImage = gallery[0];
  const host = property.metadata.host as Host | undefined;
  const amenities = property.metadata.amenities || [];

  return (
    <Link 
      href={`/properties/${property.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden">
        {firstImage ? (
          <img
            src={`${firstImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={property.metadata.name}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
            <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Property Type Badge */}
        {property.metadata.property_type && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-neutral-700">
            {property.metadata.property_type.value}
          </span>
        )}

        {/* Superhost Badge */}
        {host && typeof host !== 'string' && host.metadata.superhost && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white rounded-full text-sm font-medium flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Superhost
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-primary transition-colors line-clamp-1">
            {property.metadata.name}
          </h3>
        </div>

        <p className="text-neutral-600 text-sm mb-3 flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {property.metadata.location}
        </p>

        <div className="flex items-center gap-3 text-sm text-neutral-600 mb-4">
          <span>{property.metadata.bedrooms} bed{property.metadata.bedrooms !== 1 ? 's' : ''}</span>
          <span>•</span>
          <span>{property.metadata.bathrooms} bath{property.metadata.bathrooms !== 1 ? 's' : ''}</span>
        </div>

        {/* Amenities Preview */}
        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-xs">
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded text-xs">
                +{amenities.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="pt-4 border-t border-neutral-100">
          <span className="text-xl font-semibold text-neutral-900">
            ${property.metadata.price_per_night}
          </span>
          <span className="text-neutral-600"> / night</span>
        </div>
      </div>
    </Link>
  );
}