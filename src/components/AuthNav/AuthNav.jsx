import { Links } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Links to="/registration">Registration</Links>
      <Links to="/login">Log in</Links>
    </div>
  );
}
