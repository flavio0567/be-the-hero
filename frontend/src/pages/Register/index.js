import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, Section } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);
      alert(`your ID: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert(`sometihng wroong in register`);
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Logo" />

          <h1>Register</h1>
          <p>
            Register to get in the platform to help people to find your ONG.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Back to Logon
          </Link>
        </Section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="ONG's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <div>
            <input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="State"
              style={{ width: 92 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleRegister}>
            Register
          </button>
        </form>
      </Content>
    </Container>
  );
}
