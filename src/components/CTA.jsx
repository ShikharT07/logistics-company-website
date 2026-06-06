import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="bg-orange-500 py-20 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Ready to Ship Your Cargo?
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold"
      >
        Get a Quote
      </motion.button>
    </section>
  );
}

export default CTA;