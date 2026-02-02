import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-12 lg:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2L2 12h4v14h8v-8h4v8h8V12h4L16 2zm0 4.5L24 12v10h-4v-8h-8v8H8V12l8-5.5z"/>
              </svg>
              <span className="text-xl font-semibold">StayScape</span>
            </Link>
            <p className="text-neutral-400 text-sm">
              Find your perfect stay for every adventure.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  All Properties
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Featured Stays
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Host</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Become a Host
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Host Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {currentYear} StayScape. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}