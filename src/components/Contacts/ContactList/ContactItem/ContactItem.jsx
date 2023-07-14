import { useDispatch } from 'react-redux';
import { Btn, Item, Name, Number } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'store/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Btn
        type="button"
        name="delete"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Detele
      </Btn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
