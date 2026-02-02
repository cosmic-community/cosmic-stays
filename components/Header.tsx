import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 2L2 12h4v14h8v-8h4v8h8V12h4L16 2zm0 4.5L24 12v10h-4v-8h-8v8H8V12l8-5.5z"/>
            </svg>
            <span className="text-xl font-semibold text-neutral-900">StayScape</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
              Properties
            </Link>
            <Link href="/#testimonials" className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
              Reviews
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
              Become a Host
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
              <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}