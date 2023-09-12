import { useAuth } from '../hooks';
import { Links } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Links to="/">Home</Links>

      {isLoggedIn && <Links to="/contacts">Contacts</Links>}
    </nav>
  );
};

export default Navigation;
