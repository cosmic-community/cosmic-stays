// app/hosts/[slug]/page.tsx
import { getHost, getHosts, getPropertiesByHost } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';

export async function generateStaticParams() {
  const hosts = await getHosts();
  return hosts.map((host) => ({
    slug: host.slug,
  }));
}

export default async function HostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const host = await getHost(slug);

  if (!host) {
    notFound();
  }

  const properties = await getPropertiesByHost(slug);

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
            <li className="text-neutral-900 font-medium">{host.metadata.name}</li>
          </ol>
        </nav>

        {/* Host Profile */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {host.metadata.profile_photo && (
              <img
                src={`${host.metadata.profile_photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={host.metadata.name}
                width={150}
                height={150}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
              />
            )}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <h1 className="text-3xl font-semibold text-neutral-900">
                  {host.metadata.name}
                </h1>
                {host.metadata.superhost && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Superhost
                  </span>
                )}
              </div>
              {host.metadata.bio && (
                <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl">
                  {host.metadata.bio}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Host's Properties */}
        {properties.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-8">
              {host.metadata.name}&apos;s Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}

        {properties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600">
              No properties listed yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}