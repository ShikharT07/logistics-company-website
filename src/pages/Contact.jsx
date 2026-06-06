import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-900 min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-slate-400 text-lg">
              We'd love to hear from you. Fill out the form or reach us directly.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-slate-800 p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-slate-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-slate-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-slate-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full bg-slate-700 text-white p-4 rounded-lg outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-800 p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4 items-center">
                  <Phone className="text-orange-500" size={22} />
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-slate-400">+1 (000) 000-0000</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Mail className="text-orange-500" size={22} />
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-slate-400">info@logisticspro.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MapPin className="text-orange-500" size={22} />
                  <div>
                    <h3 className="text-white font-semibold">Address</h3>
                    <p className="text-slate-400">123 Placeholder Street, City, Country</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 h-64 rounded-xl bg-slate-700 flex items-center justify-center text-slate-400">
                Google Maps Embed Here
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;