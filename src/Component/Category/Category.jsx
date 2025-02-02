import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function Category({ onHandleCategory }) {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");
  // get meals category
  async function getCategories() {
    try {
      seterror("");
      setLoading(true);
      const { data, status } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      if (status !== 200) throw new Error("meals categories not found");

      setCategory(data.categories);
    } catch (error) {
      seterror(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className='mb-10'>
      <h1>Learn, Cook, Eat Your Food</h1>
      <ul className='flex flex-wrap justify-center space-y-1'>
        {loading && <p className='text-center py-4 text-3xl'>Loading...</p>}

        {category.map((item) => (
          <li
            onClick={() => onHandleCategory(item.strCategory)}
            key={item.idCategory}
            className='px-3 py-1 me-2 cursor-pointer border-gray-400 border-1 rounded-full hover:shadow-2xl text-gray-700 hover:bg-amber-50 transition-all duration-300'
          >
            {item.strCategory}
          </li>
        ))}

        {error && (
          <p className=' text-red-700 py-4 text-center text-3xl'>
            {error} <span>⛔</span>
          </p>
        )}
      </ul>
    </div>
  );
}
