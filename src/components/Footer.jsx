import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">LOGISTICS PRO</h3>
            <p className="text-slate-400">
              Reliable freight, transportation, warehousing, and supply chain solutions worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Road Freight</li>
              <li>Air Freight</li>
              <li>Ocean Freight</li>
              <li>Warehousing</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Tracking</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <div className="space-y-3">
              <div className="flex gap-3 items-center">
                <Phone size={18} />
                <span>+1 (000) 000-0000</span>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={18} />
                <span>info@logisticspro.com</span>
              </div>

              <div className="flex gap-3 items-center">
                <MapPin size={18} />
                <span>123 Placeholder Street, City, Country</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-lg">
              <a href="#" className="hover:text-orange-400"><FaFacebookF /></a>
              <a href="#" className="hover:text-orange-400"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-400"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
          © 2026 Logistics Pro. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;