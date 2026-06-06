import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section id="home" className="relative">

      {/* Background */}
      <div
        className="h-[90vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-white">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-orange-400 font-semibold mb-4"
          >
            GLOBAL LOGISTICS NETWORK
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Fast, Secure & Reliable Cargo Delivery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-200 mt-6 max-w-xl"
          >
            We move goods across cities, countries, and continents with precision and speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex gap-4 mt-8"
          >
            <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600">
              Get Quote
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
              Track Shipment
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;