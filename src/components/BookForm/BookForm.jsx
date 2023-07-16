import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Btn, InputField, Label, TextWrapper, Title } from './BookForm.styled';
import { addContact } from 'store/operations';

const errorNotify = target =>
  toast.error(`${target} already exists in the phonebook`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

const BookForm = ({ title }) => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: values => {
      if (!values.name || !values.number) return;

      if (
        contacts.find(el => el.name.toLowerCase() === values.name.toLowerCase())
      )
        return errorNotify(`Name ${values.name}`);

      if (contacts.find(el => el.number === values.number))
        return errorNotify(`Phone number ${values.number}`);

      dispatch(addContact(values));

      formik.resetForm();
    },
  });

  return (
    <div>
      <Title>{title}</Title>
      <form onSubmit={formik.handleSubmit}>
        <Label>
          <TextWrapper>Name</TextWrapper>
          <InputField
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Jack"
          />
        </Label>
        <Label>
          <TextWrapper>Number</TextWrapper>
          <InputField
            type="tel"
            name="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            placeholder="0990003355"
          />
        </Label>
        <Btn type="submit" name="submit">
          Add contact
        </Btn>
      </form>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default BookForm;

BookForm.propTypes = {
  title: PropTypes.string.isRequired,
};
