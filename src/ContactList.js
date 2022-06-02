const ContactList = ({ contacts }) => {
  return (
    <ul className="contact list">
      {contacts.map((contact) => (
        <li className="contact preview" key={contact.name}>
          <a href={contact.link}>
            {contact.icon} {contact.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
