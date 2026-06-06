import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-900 text-white min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We are a global logistics company committed to fast, reliable,
              and secure delivery solutions across air, sea, and land.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 text-slate-300">
              <p>
                Founded with a vision to simplify global transportation, we
                connect businesses and customers across continents with
                efficiency and transparency.
              </p>

              <p>
                Our network spans multiple countries, enabling us to handle
                freight forwarding, warehousing, and supply chain management
                with precision.
              </p>

              <p>
                We believe logistics should be fast, affordable, and
                trackable in real time — giving our clients complete peace of
                mind.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-slate-800 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-bold text-orange-400">10+</h2>
                  <p className="text-slate-400">Years Experience</p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-bold text-orange-400">500+</h2>
                  <p className="text-slate-400">Global Clients</p>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="h-96 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
              About Image Placeholder
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;