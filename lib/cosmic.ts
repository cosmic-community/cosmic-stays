import { createBucketClient } from '@cosmicjs/sdk';
import { Property, Host, Testimonial } from '@/types';

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging', // Changed: Added staging environment
});

export async function getProperties(): Promise<Property[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'properties' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Property[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch properties');
  }
}

export async function getProperty(slug: string): Promise<Property | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'properties',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Property;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch property');
  }
}

export async function getHosts(): Promise<Host[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'hosts' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Host[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch hosts');
  }
}

export async function getHost(slug: string): Promise<Host | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'hosts',
        slug,
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.object as Host;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch host');
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}

export async function getPropertiesByHost(hostSlug: string): Promise<Property[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'properties',
        'metadata.host': hostSlug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects as Property[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch properties by host');
  }
}