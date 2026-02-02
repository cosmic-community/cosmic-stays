export default function HeroSection() {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2400&h=1200&fit=crop&auto=format,compress"
          alt="Beautiful vacation property"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
            Find Your Perfect
            <span className="text-primary"> Stay</span>
          </h1>
          <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
            Discover unique properties around the world. From cozy apartments to luxury villas, 
            find the perfect place for your next adventure.
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-3">
              <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <input
                type="text"
                placeholder="Where are you going?"
                className="flex-1 outline-none text-neutral-900 placeholder-neutral-400"
              />
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:bg-primary-500 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}