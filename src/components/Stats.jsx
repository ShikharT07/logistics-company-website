import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "10K+", label: "Deliveries" },
    { number: "500+", label: "Clients" },
    { number: "150+", label: "Fleet Vehicles" },
    { number: "99%", label: "On-Time Rate" },
  ];

  return (
    <section className="bg-slate-950 py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center text-white">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-6 rounded-xl bg-slate-900 hover:bg-slate-800 transition"
          >
            <h2 className="text-4xl font-bold text-orange-400">
              {s.number}
            </h2>
            <p className="text-slate-400 mt-2">{s.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Stats;