export function Card({ meal }) {
  const { strMeal, strIngredient1 } = meal;

  return (
    <div className='px-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
      <div className='bg-white pt-10 rounded-lg shadow text-center relative'>
        <img
          src={meal.strMealThumb}
          className='w-1/3 text-center mx-auto absolute top-1/7 left-1/2 -translate-x-1/2 -translate-y-3/4 rounded-full'
          alt=''
        />
        <h3 className='text-3xl my-1'>
          {strIngredient1 ? strIngredient1 : strMeal.split(" ").at(0)}.
        </h3>
        <p className='text-2xl mb-1'>{meal.strArea}</p>
        <a
          href=''
          className='my-1.5 bg-green-600 rounded-full px-2 py-1 inline-block hover:bg-green-900 transition-all duration-300'
        >
          test
        </a>
      </div>
    </div>
  );
}
