import React from 'react';

import { motion } from 'framer-motion';

const Movies = ({ movies }) => {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);

    return date
      .toDateString()
      .split(' ')
      .splice(1, 3)
      .join(' ')
      .replace(/(?<=\d) /, ', ');
  }

  return (
    <section>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='grid gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {React.Children.toArray(
          movies.map(({ title, release_date, id, poster_path }) => (
            <div className='overflow-hidden bg-white shadow-md focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width={300}
                height={300}
                className='w-full transition-transform duration-300 ease-in-out	hover:scale-105'
              />
              <div className='p-5 text-base'>
                <p className='pointer-events-none font-bold'>{title}</p>
                <span>{reformatDate(release_date)}</span>
              </div>
            </div>
          ))
        )}
      </motion.div>
    </section>
  );
};

export { Movies };
