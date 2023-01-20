import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(el => {
        return (
          <li key={el.id}>
            {el.name}: <span>{el.number}</span>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(el.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
