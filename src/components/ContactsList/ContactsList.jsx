import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.list}>
      {contacts.map(el => {
        return (
          <li key={el.id} className={css.list_item}>
            {el.name}: <span>{el.number}</span>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(el.id));
              }}
              className={css.list_button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
