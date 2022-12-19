import { useEffect, useState } from 'react';
import { Filter } from './Filter';
import { Footer } from './Footer';
import { Movies } from './Movies';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=1`;
    const data = await fetch(url);
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <>
      <div className='flex min-h-screen flex-col bg-gray-50'>
        <main className='mx-auto w-4/5 max-w-7xl py-8'>
          <h1 className='mb-5 text-lg font-bold'>Search movies by category</h1>
          <Filter
            popular={popular}
            setFiltered={setFiltered}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <motion.div layout>
            <AnimatePresence>
              <Movies movies={filtered} />
            </AnimatePresence>
          </motion.div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export { Home };
