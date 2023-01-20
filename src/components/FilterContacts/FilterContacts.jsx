import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';

import { filterContact } from 'components/redux/filter/filterSlice';
import { selectFilterValue } from 'components/redux/selectors';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={event => {
          dispatch(filterContact(event.target.value));
        }}
        placeholder="Search contacts"
      />
    </div>
  );
};
