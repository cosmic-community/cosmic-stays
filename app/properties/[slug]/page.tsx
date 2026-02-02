// app/properties/[slug]/page.tsx
import { getProperty, getProperties } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import ImageGallery from '@/components/ImageGallery';
import AmenityBadge from '@/components/AmenityBadge';
import { Host } from '@/types';

export async function generateStaticParams() {
  const properties = await getProperties();
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = await getProperty(slug);

  if (!property) {
    notFound();
  }

  const host = property.metadata.host as Host | undefined;
  const gallery = property.metadata.gallery || [];
  const amenities = property.metadata.amenities || [];

  return (
    <div className="py-8 lg:py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-neutral-600">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">{property.metadata.name}</li>
          </ol>
        </nav>

        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-2">
            {property.metadata.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-neutral-600">
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {property.metadata.location}
            </span>
            {property.metadata.property_type && (
              <span className="px-3 py-1 bg-neutral-100 rounded-full text-sm">
                {property.metadata.property_type.value}
              </span>
            )}
          </div>
        </div>

        {/* Image Gallery */}
        {gallery.length > 0 && (
          <div className="mb-12">
            <ImageGallery images={gallery} propertyName={property.metadata.name} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Stats */}
            <div className="flex flex-wrap gap-6 pb-8 mb-8 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-neutral-700">
                  <strong>{property.metadata.bedrooms}</strong> {property.metadata.bedrooms === 1 ? 'bedroom' : 'bedrooms'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
                <span className="text-neutral-700">
                  <strong>{property.metadata.bathrooms}</strong> {property.metadata.bathrooms === 1 ? 'bathroom' : 'bathrooms'}
                </span>
              </div>
            </div>

            {/* Description */}
            {property.metadata.description && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">About this place</h2>
                <div className="prose prose-neutral max-w-none">
                  <ReactMarkdown>{property.metadata.description}</ReactMarkdown>
                </div>
              </div>
            )}

            {/* Amenities */}
            {amenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">What this place offers</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {amenities.map((amenity) => (
                    <AmenityBadge key={amenity} amenity={amenity} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="sticky top-8 bg-white border border-neutral-200 rounded-2xl p-6 shadow-lg">
              <div className="mb-6">
                <span className="text-3xl font-semibold text-neutral-900">
                  ${property.metadata.price_per_night}
                </span>
                <span className="text-neutral-600"> / night</span>
              </div>

              <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-500 transition-colors mb-4">
                Reserve
              </button>
              <p className="text-center text-sm text-neutral-500">
                You won&apos;t be charged yet
              </p>
            </div>

            {/* Host Card */}
            {host && typeof host !== 'string' && (
              <div className="mt-6 bg-neutral-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Hosted by</h3>
                <Link href={`/hosts/${host.slug}`} className="flex items-center gap-4 group">
                  {host.metadata.profile_photo && (
                    <img
                      src={`${host.metadata.profile_photo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`}
                      alt={host.metadata.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium text-neutral-900 group-hover:text-primary transition-colors">
                      {host.metadata.name}
                    </p>
                    {host.metadata.superhost && (
                      <span className="inline-flex items-center gap-1 text-sm text-primary">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Superhost
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}