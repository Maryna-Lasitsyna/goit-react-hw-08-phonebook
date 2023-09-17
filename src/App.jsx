import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'components/hooks';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { refreshUser } from 'redux/auth/auth-operations';
import { Container } from './App.styled';

import { Layout } from './components/Layout/Layout';
import { Loader } from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Contacts = lazy(() => import('./pages/Contacts'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Container>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            exact
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                restricted
                component={<Register />}
              />
            }
          />
          <Route
            exact
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                restricted
                component={<Login />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
