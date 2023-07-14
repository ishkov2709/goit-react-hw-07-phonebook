import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { InputField } from './FilterForm.styled';
import { completeFilter } from 'store/phonebookSlice';

const FilterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      filter: '',
    },
  });

  const handleFilterChange = e => {
    formik.handleChange(e);
    dispatch(completeFilter(e.target.value));
  };

  return (
    <form>
      <label>
        <InputField
          type="text"
          name="filter"
          onChange={handleFilterChange}
          value={formik.values.filter}
        />
      </label>
    </form>
  );
};

export default FilterForm;
