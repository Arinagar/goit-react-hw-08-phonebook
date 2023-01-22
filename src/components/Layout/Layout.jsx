import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PuffLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<PuffLoader color="#36d7b7" size={200} />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer position="center" />
    </>
  );
};

export default Layout;
