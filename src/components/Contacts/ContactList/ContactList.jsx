import { useSelector } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { ThreeDots } from 'react-loader-spinner';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const loading = useSelector(state => state.contacts.isLoading);
  const filter = useSelector(state => state.filter);

  if (loading)
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3869f1"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px 0',
        }}
        visible={true}
      />
    );

  if (!loading && contacts.length)
    return (
      <List>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
    );
};

export default ContactList;
