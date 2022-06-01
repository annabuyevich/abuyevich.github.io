const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div className="contact-preview" key={contact.name}>
          <a href={contact.link}>
            {contact.icon} {contact.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
