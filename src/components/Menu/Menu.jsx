import Container from "../Container/Container";
import SectionTitle from "../SectionTitle/SectionTitle";
import menuData from "../../data/menuData";
import MenuCard from "../MenuCard/MenuCard";
import { useState } from "react";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Coffee",
    "Pastry",
    "Dessert",
  ];

  // Filter menu berdasarkan category
  const filter_Menu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter(
          (menu) => menu.category === selectedCategory
        );

  return (
    <section className="py-16 bg-amber-50">
      <Container>

        <SectionTitle
          title="Our Menu"
          subtitle="Choose your favorite coffee"
        />


        {/* Filter Button */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-5 py-2 rounded-full font-medium
                transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-orange-700 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>


        {/* Menu Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {filter_Menu.map((menu) => (
            <MenuCard
              key={menu.id}
              {...menu}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}

export default Menu;