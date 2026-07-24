import Button from "../Button/Button"

function MenuCard({
  image,
  title,
  description,
  price,
  category,
}) {
  return (
    <div className="flex flex-col h-full 
                  bg-white rounded-2xl shadow-md 
                    overflow-hidden hover:shadow-xl 
                    hover:-translate-y-2
                    transition-all duration-300 ">

      <img src={image} alt={title} className="w-full h-52 object-cover"/>

      <div className="flex flex-col grow p-6">
        <span className="inline-block bg-amber-100 text-amber-700 text-sm font-medium px-3 py-1 rounded-full mb-3">
          {category}
        </span>

        <h3 className="text-2xl font-bold text-stone-800">
          {title}
        </h3>

        <p className="text-gray-600 mt-3 grow">
          {description}
        </p>

        <p className="mt-5 text-xl font-bold text-orange-700">
          Rp {price.toLocaleString("id-ID")}
        </p>

        <div className="mt-5">
            <Button variant="primary">
                Order Now
            </Button>
        </div>

      </div>

    </div>
  );
}

export default MenuCard;