import { useDispatch, useSelector } from 'react-redux';
import getFilterContacts from 'redux/contacts/selectorC';
import { removeContact } from 'redux/contacts/contacts-slice';
import { Ul, Li, Button } from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const phoneBook = useSelector(state => state.phoneBook);

  const elements = getFilterContacts(phoneBook).map(({ name, phone, id }) => {
    return (
      <Li key={id}>
        Name :{name} Phone :{phone}
        <Button onClick={() => dispatch(removeContact(id))}>Delete</Button>
      </Li>
    );
  });
  return <Ul>{elements}</Ul>;
}
