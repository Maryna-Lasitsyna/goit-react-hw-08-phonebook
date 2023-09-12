import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import { useAuth } from 'components/hooks';
import { Container, Avatar, Text, Button } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="avatar" />
      <Text>Welcome, {user?.name || 'Guest'}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </Container>
  );
}
