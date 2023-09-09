import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Math.random(),
      name,
      username,
      phone,
    };
    onAddContact(newContact);
    setName('');
    setUsername('');
    setPhone('');
  };

  const handleCancel = () => {
    setName('');
    setUsername('');
    setPhone('');
  };

  return (
    <div>
      <h2>Додати новий контакт</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="username">Прізвище:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="phone">Телефон:</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Зберегти</button>
          <button type="button" onClick={handleCancel}>Скасувати</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
