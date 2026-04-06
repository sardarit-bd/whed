import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary-color)] text-gray-100">
      <div className="cs-container mx-auto px-6 md:px-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">

          {/* Logo */}
          <div className="flex items-start lg:col-span-1">
            <Image
              src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772527599/logo_czibi3.png"
              alt="WHED Logo"
              width={180}
              height={80}
              className="object-contain"
            />
          </div>

          {/* About WHED */}
          <div className="lg:col-span-4">
            <h3 className="text-[var(--text-primary)] text-[28px] font-semibold mb-3">The World Higher Education Database (WHED)</h3>
            <div className="flex items-center gap-2 w-full max-w-[520px] px-5 py-0.5 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
              <CiSearch />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 border-none outline-none"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-100 font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-100 font-normal">
              <li><Link href="/" className="transition-colors border-b border-gray-100">Home</Link></li>
              <li><Link href="/about" className="transition-colors border-b border-gray-100">About</Link></li>
              <li><Link href="/how-to-use" className="transition-colors border-b border-gray-100">How to Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-100 font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-100 font-normal">
              <li><Link href="/" className="transition-colors border-b text-gray-100">Home</Link></li>
              <li><Link href="/about" className="transition-colors border-b text-gray-100">About</Link></li>
              <li><Link href="/how-to-use" className="transition-colors border-b text-gray-100">How to Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 mt-10 pt-5">
          <p className="text-sm text-[var(--text-primary)] text-center">
            © 2026{" "}
            <Link
              href="https://www.iau-aiu.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color)] underline"
            >
              International Association of Universities (IAU)
            </Link>{" "}
            official partner of UNESCO (associate status) Database update February 2026{" "}
            <Link href="/terms" className="text-[var(--primary-color)] underline">
              Terms of use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}