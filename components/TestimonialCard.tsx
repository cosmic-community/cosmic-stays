import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = parseInt(testimonial.metadata.rating.key, 10);

  return (
    <div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-neutral-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review */}
      <p className="text-neutral-700 mb-6 leading-relaxed">
        &ldquo;{testimonial.metadata.review}&rdquo;
      </p>

      {/* Guest Info */}
      <div className="flex items-center gap-3">
        {testimonial.metadata.guest_photo ? (
          <img
            src={`${testimonial.metadata.guest_photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.guest_name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-neutral-200 flex items-center justify-center">
            <span className="text-neutral-500 text-lg font-medium">
              {testimonial.metadata.guest_name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-medium text-neutral-900">{testimonial.metadata.guest_name}</p>
          <p className="text-sm text-neutral-500">Verified Guest</p>
        </div>
      </div>
    </div>
  );
}