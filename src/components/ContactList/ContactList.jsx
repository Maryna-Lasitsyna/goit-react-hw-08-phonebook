import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/selectors';
import { Loader } from '../Loader/Loader';
import { fetchContacts } from 'redux/operations';
import ContactItem from '../ContactItem/ContactItem';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <ContactItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
}

export default ContactList;
