import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "10K+", label: "Deliveries" },
    { number: "500+", label: "Clients" },
    { number: "150+", label: "Fleet Vehicles" },
    { number: "99%", label: "On-Time Rate" },
  ];

  return (
    <section id="stats" className="bg-orange-500 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h2 className="text-4xl font-bold">{s.number}</h2>
            <p>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;