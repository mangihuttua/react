import hero from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-18">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          <div className="text-center md:text-left justify-center md:justify-start">

            <span className="flex items-center justify-center w-52 mx-auto bg-orange-200 text-orange-700 px-4 py-2 gap-3 rounded-full text-sm font-semibold mb-6">
              <FaCoffee /> Premium Coffee
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-xl text-gray-900">
              Fresh Coffee
              <br />
              <span className="text-amber-700">
                Everyday
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
              Nikmati kopi premium dengan cita rasa terbaik
              untuk menemani setiap momenmu.
            </p>

            <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
              
              <Link to="/menu"
                    className="bg-orange-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition">
                    Explore Menu
              </Link>

              <Link to="/contact"
                    className="border-2 border-orange-800 text-orange-800 px-6 py-3 rounded-lg hover:bg-orange-800 hover:text-white transition">
                    Reserve Table
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={hero} alt="Fresh Coffee"
              className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;