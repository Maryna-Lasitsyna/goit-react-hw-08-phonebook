import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { setContactsFilter } from 'redux/contacts/filterSlice';
import { Input } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setContactsFilter(event.target.value.trim()));
  };

  const contacts = useSelector(selectContacts);

  return (
    <Input
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      disabled={contacts.length === 0}
    />
  );
}

export default Filter;
