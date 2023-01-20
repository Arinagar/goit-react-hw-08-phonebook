import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { HomePage } from 'Pages/HomePage/HomePage';
import { Register } from 'Pages/Register/Register';
import { Login } from 'Pages/Login/Login';
import { ContactsPage } from 'Pages/ContactsPage/ContactsPage';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/tasks" element={<ContactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
