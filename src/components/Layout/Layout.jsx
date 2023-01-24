import { AppBar } from 'components/AppBar/AppBar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { HashLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import { selectError } from 'redux/contacts/selectors';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const error = useSelector(selectError);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  const override = {
    display: 'block',
    margin: '0 auto',
  };

  return (
    <>
      <AppBar />
      <main>
        <Suspense
          fallback={
            <HashLoader color="#36d7b7" size={150} cssOverride={override} />
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};

export default Layout;
