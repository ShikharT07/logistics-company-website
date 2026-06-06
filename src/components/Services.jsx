import { Truck, Plane, Ship, Warehouse } from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    { icon: <Truck />, title: "Road Freight" },
    { icon: <Plane />, title: "Air Freight" },
    { icon: <Ship />, title: "Ocean Freight" },
    { icon: <Warehouse />, title: "Warehousing" },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Our Services</h2>
        <p className="text-center text-slate-400 mt-3 mb-12">
          End-to-end logistics solutions for modern businesses
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-900 p-8 rounded-xl hover:bg-slate-800 transition"
            >
              <div className="text-orange-400 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">
                Reliable and efficient logistics service tailored for your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;