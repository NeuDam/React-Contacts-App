import { GlobalStateContext } from "../Context/ContextState";
import CardContact from "./CardContact";

function ContactsList() {
  const { contactsList } = GlobalStateContext();

  if (contactsList.length == 0) {
    return (
      <div className="container_contacts">
        <h1>THERE ARE NOT CONTACTS</h1>
      </div>
    );
  }

  return (
    <div className="container_contacts">
      {contactsList.map((contact) => (
        <CardContact contact={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactsList;
