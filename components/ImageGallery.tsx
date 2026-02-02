'use client';

import { useState } from 'react';
import { ImageFile } from '@/types';

interface ImageGalleryProps {
  images: ImageFile[];
  propertyName: string;
}

export default function ImageGallery({ images, propertyName }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  const mainImage = images[selectedIndex];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
        <img
          src={`${mainImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={`${propertyName} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all ${
                index === selectedIndex
                  ? 'ring-2 ring-primary ring-offset-2'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=192&h=128&fit=crop&auto=format,compress`}
                alt={`${propertyName} - Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}