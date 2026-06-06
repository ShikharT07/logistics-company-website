import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Tracking", path: "/tracking" },
    { name: "Quote", path: "/quote" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Calcutta Malwa Roadways
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-slate-300 hover:text-orange-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/quote"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-semibold transition"
        >
          Get Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 px-6 py-4 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-orange-400"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/quote"
            onClick={() => setOpen(false)}
            className="block bg-orange-500 text-center py-2 rounded-lg font-semibold"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;