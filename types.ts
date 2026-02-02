export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at?: string;
  modified_at?: string;
}

export interface ImageFile {
  url: string;
  imgix_url: string;
}

export interface Host extends CosmicObject {
  type: 'hosts';
  metadata: {
    name: string;
    bio?: string;
    profile_photo?: ImageFile;
    superhost?: boolean;
    email?: string;
  };
}

export interface PropertyType {
  key: string;
  value: string;
}

export interface Property extends CosmicObject {
  type: 'properties';
  metadata: {
    name: string;
    description?: string;
    location: string;
    price_per_night: number;
    bedrooms: number;
    bathrooms: number;
    property_type?: PropertyType;
    amenities?: string[];
    gallery?: ImageFile[];
    host?: Host | string;
  };
}

export interface RatingOption {
  key: string;
  value: string;
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    guest_name: string;
    guest_photo?: ImageFile;
    rating: RatingOption;
    review: string;
    property?: Property | string;
  };
}