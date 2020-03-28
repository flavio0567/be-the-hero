import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('login failure, try again.');
    }
  }

  return (
    <Container>
      <section type="form">
        <img src={logoImg} alt="Logo" />

        <form onSubmit={handleLogin}>
          <h1>Logon</h1>

          <input
            placeholder="Your ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Enter
          </button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Not registered
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}
