import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUser,
  selectEmail,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    email,
    isRefreshing,
  };
};
