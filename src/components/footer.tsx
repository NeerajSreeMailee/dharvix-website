import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a2342] via-[#193b6a] to-[#1e2a78] py-14 px-10 shadow-2xl border-t-4 border-blue-700 transition-colors">
      <div className="container grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-blue-100 tracking-wide drop-shadow-lg">DharviX Tech Solutions</h3>
          <p className="text-base text-blue-200 font-medium">
            Empowering Innovation with Cutting-Edge Products & Services
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="#" className="rounded-full bg-blue-900/40 hover:bg-blue-400/30 p-2 transition text-blue-100 hover:text-blue-300 shadow">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="rounded-full bg-blue-900/40 hover:bg-blue-400/30 p-2 transition text-blue-100 hover:text-blue-300 shadow">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="rounded-full bg-blue-900/40 hover:bg-blue-400/30 p-2 transition text-blue-100 hover:text-blue-300 shadow">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="rounded-full bg-blue-900/40 hover:bg-blue-400/30 p-2 transition text-blue-100 hover:text-blue-300 shadow">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-blue-100 uppercase tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="/" className="transition hover:underline text-blue-200 hover:text-blue-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="transition hover:underline text-blue-200 hover:text-blue-100">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="transition hover:underline text-blue-200 hover:text-blue-100">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="transition hover:underline text-blue-200 hover:text-blue-100">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-blue-100 uppercase tracking-wide">Services & Solutions</h3>
          <ul className="space-y-2 text-base">
            <li>
              <Link href="#services" className="transition hover:underline text-blue-200 hover:text-blue-100">
                AI & Intelligent Systems Services
              </Link>
            </li>
            <li>
              <Link href="#services" className="transition hover:underline text-blue-200 hover:text-blue-100">
                Enterprise Digital Solutions & Integration Services
              </Link>
            </li>
            <li>
              <Link href="#services" className="transition hover:underline text-blue-200 hover:text-blue-100">
                AI Agents & Automation Ecosystem
              </Link>
            </li>
            <li>
              <Link href="#services" className="transition hover:underline text-blue-200 hover:text-blue-100">
                Data Intelligence & IoT Ecosystem
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-blue-100 uppercase tracking-wide">Contact Info</h3>
          <address className="not-italic text-base text-blue-200 leading-relaxed">
            <p className="mb-2">a-hub, Andhra University North Campus,Visakhapatnam,<br /> Andhra Pradesh 530003</p>
            <p className="mb-2">Phone: <a href="tel:+919000633061" className="hover:underline text-blue-100">+91 90006 33061</a></p>
            <p>Email: <a href="mailto:info@dharvixtechsolutions.com" className="hover:underline text-blue-100">info@dharvixtechsolutions.com</a></p>
          </address>
        </div>
      </div>
      <div className="container mt-10 border-t border-blue-800/40 pt-8">
        <p className="text-center text-base text-blue-200 tracking-wide">
          © {new Date().getFullYear()} <span className="font-bold text-blue-100">DharviX Tech Solutions</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

