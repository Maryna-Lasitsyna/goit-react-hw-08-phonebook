import { HelmetProvider, Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter/Filter';
import { Text } from './Contacts.styled';

function Contacts() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <ContactForm />
        {/* <h2>Contacts</h2> */}
        <Text>Contacts</Text>
        <Filter />
        <ContactList />
      </HelmetProvider>
    </>
  );
}

export default Contacts;
