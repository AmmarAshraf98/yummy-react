import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { useOutletContext } from "react-router-dom";

export default function Meals() {
  const x = useOutletContext() || "";

  const [meals, setmeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");

  async function getMeals() {
    try {
      setLoading(true);
      seterror("");
      // www.themealdb.com/api/json/v1/1/list.php?c=list
      const { data, status } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/${
          x ? "filter" : "search"
        }.php?${x ? `c=${x}` : `s=`}`
      );
      if (status !== 200) throw new Error("meals not found");
      setmeals(data.meals);
      console.log(data, status);
    } catch (error) {
      setLoading(false);
      seterror(error.message);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   async function getMeals(x) {
  //     try {
  //       setLoading(true);
  //       seterror("");
  //       const { data, status } = await axios.get(
  //         `https://www.themealdb.com/api/json/v1/1/search.php?c=${x}`
  //       );
  //       if (status !== 200) throw new Error("meals not found");
  //       setmeals(data.meals);
  //     } catch (error) {
  //       setLoading(false);
  //       seterror(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   getMeals(x);
  // }, [x]);

  useEffect(() => {
    getMeals(x);
  }, [x]);

  return (
    <div className='flex flex-wrap justify-center space-y-12'>
      {loading && <p className='text-center py-4 text-3xl'>Loading...</p>}
      {!loading &&
        !error &&
        meals.map((meal) => <Card meal={meal} key={meal.idMeal} />)}

      {error && (
        <p className=' text-red-700 py-4 text-center text-3xl'>
          {error} <span>⛔</span>
        </p>
      )}
    </div>
  );
}
