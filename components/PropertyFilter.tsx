'use client';

import { useState } from 'react';
import { Property } from '@/types';
import PropertyCard from './PropertyCard';

interface PropertyFilterProps {
  properties: Property[];
}

const propertyTypes = [
  { key: 'all', label: 'All' },
  { key: 'villa', label: 'Villa' },
  { key: 'house', label: 'House' },
  { key: 'apartment', label: 'Apartment' },
  { key: 'loft', label: 'Loft' },
  { key: 'cabin', label: 'Cabin' },
];

export default function PropertyFilter({ properties }: PropertyFilterProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProperties = activeFilter === 'all'
    ? properties
    : properties.filter(
        (property) => property.metadata.property_type?.key === activeFilter
      );

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {propertyTypes.map((type) => (
          <button
            key={type.key}
            onClick={() => setActiveFilter(type.key)}
            className={`px-5 py-2.5 rounded-full font-medium transition-all ${
              activeFilter === type.key
                ? 'bg-primary text-white'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-neutral-600">No properties found for this category.</p>
        </div>
      )}
    </div>
  );
}