import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Помилка завантаження контактів:', error));
  }, []);

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleAddContact = (newContact) => {
    // Додавання нового контакту
    setContacts([...contacts, newContact]);
    toggleForm();
  };

  return (
    <div>
      <h1>Список контактів</h1>
      <table id="users">
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={toggleForm}>
        {showForm ? 'Скасувати' : 'Додати контакт'}
      </button>
      {showForm && <ContactForm onAddContact={handleAddContact} />}
    </div>
  );
};

export default Contacts;
