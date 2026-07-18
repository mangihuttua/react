import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";

function Menu() {
  return (
    <section className="py-16 bg-amber-50">
      <Container>
        <SectionTitle title="Our Menu"
                      subtitle="Choose your favorite coffee"/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Kopi Spesial</h3>
            <p className="text-gray-600 mb-4">
              Rasa yang kaya dan aroma yang memikat.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 25.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pastry Manis</h3>
            <p className="text-gray-600 mb-4">
              Pastry yang fresh dan lezat.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 15.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Salad Sehat</h3>
            <p className="text-gray-600 mb-4">
              Pilih dari berbagai pilihan sayuran segar.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 30.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sandwich</h3>
            <p className="text-gray-600 mb-4">
              Isian segar dengan roti lembut.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 20.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sup Hangat</h3>
            <p className="text-gray-600 mb-4">
              Lezat dan penuh nutrisi.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 25.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Kue Coklat</h3>
            <p className="text-gray-600 mb-4">
              Rasa coklat yang kaya dan lembut.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 18.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Smoothie Berry</h3>
            <p className="text-gray-600 mb-4">
              Menyegarkan dan kaya akan vitamin.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 28.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Muffin Blueberry</h3>
            <p className="text-gray-600 mb-4">
              Manis dengan rasa blueberry asli.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 15.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pizza Margherita</h3>
            <p className="text-gray-600 mb-4">
              Pizza klasik dengan topping tomat dan keju.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 45.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pancake</h3>
            <p className="text-gray-600 mb-4">
              Lembut dan manis, disajikan dengan sirup maple.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 22.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Teh Herbal</h3>
            <p className="text-gray-600 mb-4">
              Menyejukkan dan menenangkan.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 20.000</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Waffle</h3>
            <p className="text-gray-600 mb-4">
              Camilan renyah yang disajikan dengan topping pilihan.
            </p>
            <p className="text-orange-700 font-semibold">Harga: Rp 25.000</p>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Menu;