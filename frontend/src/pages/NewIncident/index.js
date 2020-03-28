import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { Container, Content, Section } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (err) {
      alert('Failure to create a new incident, try again.');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <img src={logoImg} alt="Logo" />

          <h1>Enter a New Incident</h1>
          <p>Describe the incident in detail to find a resolving hero.</p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to home
          </Link>
        </Section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Incident subject"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            placeholder="Value US$"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Enter</button>
        </form>
      </Content>
    </Container>
  );
}
