import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-10 border-b border-gray-100 bg-gray-50 py-5'>
        <div className='mx-auto flex w-4/5 max-w-7xl items-center justify-between '>
          <Link
            to={'/'}
            className='whitespace-nowrap font-bold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'>
            Movflix
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export { Header };
