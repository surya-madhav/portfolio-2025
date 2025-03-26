'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-50 min-w-[280px] sm:min-w-[320px]">
      <ul className="flex justify-between sm:gap-12">
        <li>
          <Link 
            href="/about"
            className={`text-sm font-medium transition-all duration-300 hover:bg-yellow-100/20 px-3 py-1 rounded-full ${
              pathname === '/about' 
                ? 'text-gray-700' 
                : 'text-gray-700 hover:text-gray-700'
            }`}
          >
            About me
          </Link>
        </li>
        <li>
          <Link 
            href="/projects"
            className={`text-sm font-medium transition-all duration-300 hover:bg-yellow-100/20 px-3 py-1 rounded-full ${
              pathname === '/projects' 
                ? 'text-gray-700' 
                : 'text-gray-700 hover:text-gray-700'
            }`}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}