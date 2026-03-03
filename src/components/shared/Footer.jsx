import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00355B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div className="flex items-start">
            <Image
              src="https://res.cloudinary.com/dg83pvgls/image/upload/v1772527599/logo_czibi3.png"
              alt="WHED Logo"
              width={120}
              height={80}
              className="object-contain"
            />
          </div>

          {/* About WHED */}
          <div>
            <h3 className="text-base font-bold mb-3">About WHED</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The World Higher Education Database (WHED) is a
              comprehensive source of information on higher
              education systems and institutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/how-to-use" className="hover:text-white transition-colors">How to Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-3">Contact</h3>
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              International Association of Universities (IAU)<br />
              UNESCO House 1 rue Miollis, 75732 Paris<br />
              Cedex 15, France
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-5">
          <p className="text-xs text-gray-400 text-center">
            © 2026{" "}
            <Link
              href="https://www.iau-aiu.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              International Association of Universities (IAU)
            </Link>{" "}
            official partner of UNESCO (associate status) Database update February 2026{" "}
            <Link href="/terms" className="text-blue-400 hover:underline">
              Terms of use
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}