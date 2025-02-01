import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Category() {
  const [category, setCategory] = useState([]);

  // get meals category
  async function getCategories() {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    console.log(data.categories);
    setCategory(data.categories);
  }

  // // get specific meal
  // async function getCategories(mealName) {
  //   const { data } = await axios.get(
  //     `www.themealdb.com/api/json/v1/1/filter.php?c=${mealName}`
  //   );
  //   console.log(data.categories);
  //   setCategory(data.categories);
  // }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <h1>Learn, Cook, Eat Your Food</h1>
      <ul className='flex flex-wrap space-y-1'>
        {category.map((item) => (
          <li
            key={item.idCategory}
            className='px-3 py-1 me-2 cursor-pointer border-gray-400 border-1 rounded-full hover:shadow-2xl text-gray-700 hover:bg-amber-50 transition-all duration-300'
          >
            {item.strCategory}
          </li>
        ))}
      </ul>
    </div>
  );
}
