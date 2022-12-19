import React, { useEffect } from 'react';

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);
  return (
    <>
      <div className='mt-4 mb-10 flex justify-evenly items-center'>
        <button
          className={
            activeGenre === 0
              ? 'border-b-2 py-2 px-6 bg-gray-100 border-indigo-600'
              : ''
          }
          onClick={() => setActiveGenre(0)}>
          All
        </button>
        <button
          className={
            activeGenre === 35
              ? 'border-b-2 py-2 px-6 bg-gray-100 border-indigo-600'
              : ''
          }
          onClick={() => setActiveGenre(35)}>
          Comedy
        </button>
        <button
          className={
            activeGenre === 28
              ? 'border-b-2 py-2 px-6 bg-gray-100 border-indigo-600'
              : ''
          }
          onClick={() => setActiveGenre(28)}>
          Action
        </button>
      </div>
    </>
  );
};

export { Filter };
